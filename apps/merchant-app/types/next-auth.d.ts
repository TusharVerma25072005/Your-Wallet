import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string;
      email?: string;
      phone?: string;
      payId?: string;
      createdAt?: string;
      accessToken?: string;
    };
  }

  interface User {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    payId?: string;
    createdAt?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
    payId?: string;
    createdAt?: string;
    accessToken?: string;
  }
}
