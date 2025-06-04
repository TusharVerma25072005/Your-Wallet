import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import db from "@repo/db/client"
import jwt from "jsonwebtoken"

export const authOptions:NextAuthOptions = {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {
                username: { label: "Email or Phone", type: "text", placeholder: "Enter email or phone" },
                password: { label: "Password", type: "password" }

            }
            ,
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }
                console.log("Credentials received:", credentials);

                const password = credentials.password;
                const username = credentials.username;

                try {
                    const user = await db.merchant.findFirst({
                        where: {
                            OR: [
                                { email: username },
                                { phone: username },
                                { id: username }
                            ]
                        }
                    });
                    console.log("found : ",user);

                    if (!user) {
                        return null;
                    }

                    if (user.password === password) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            payId: user.payId,
                            createdAt: user.createdAt
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
    callbacks: {        async jwt({ token, user }:any) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.phone = user.phone;
                token.payId = user.payId;
                token.createdAt = user.createdAt;
                token.accessToken = jwt.sign(
                    { id: user.id, email: user.email },
                    process.env.JWT_SECRET || ''
                );
            }
            return token;
        },        async session({ session, token } : any) {
            if (token) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.phone = token.phone as string;
                session.user.payId = token.payId as string;
                session.user.createdAt = token.createdAt as string;
                session.user.accessToken = token.accessToken;
            }
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET || process.env.JWT_SECRET,
    pages: {
        signIn: '/register'
    }
}