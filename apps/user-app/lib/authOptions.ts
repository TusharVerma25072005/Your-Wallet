import db from "@repo/db/client"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import jwt from "jsonwebtoken"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email or Phone", type: "text", placeholder: "Enter email or phone" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                const password = credentials.password;
                const username = credentials.username;
                console.log("Username:", username);
                console.log("Password:", password);
                try {

                    const user = await db.user.findFirst({
                        where: {
                            OR: [
                                { email: username },
                                { phone: username },
                                { id: username }
                            ]
                        }
                    });
                    console.log("User found:", user);
                    if (!user) {
                        return null;
                    }


                    if (user.password == password) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            createdAt : user.createdAt
                        };
                    }


                    return null;
                } catch (error) {
                    console.error("Auth error:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET,
    callbacks: {
        async jwt({ token, user }: any) {

            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.phone = user.phone;
                token.createdAt = user.createdAt;
                token.accessToken = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_SECRET || ''
                );
            }
            return token;
        },
        async session({ token, session }: any) {
            if (session.user) {
                session.user.id = token.id;
                session.user.createdAt = token.createdAt;
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.accessToken = token.accessToken;
                session.user.phone = token.phone as string;
            }
            return session;
        }
    },
    pages: {
        signIn: '/register'
    }
}