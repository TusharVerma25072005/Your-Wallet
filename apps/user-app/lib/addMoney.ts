'use server'

import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

export const addMoney = async ({ amount , bank } : { amount: number; bank: string }) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        return {
            status: "error",    
        }
    }
    //@ts-ignore
    const userId = session.user?.id;
    const user = await db.user.findUnique({
        where: {
            id: userId,
        },
    });
    if (!user) {
        return {
            status: "error",
            message: "User not found",
        }
    }
    if (amount <= 0) {
        return {
            status: "error",
            message: "Amount must be greater than 0",
        }
    }
    await db.transaction.create({
        data: {
            amount: amount,
            status: "PENDING",
            userId: userId,
            merchantId: bank,
        },
    });

    //redirect to selected bank page from here with amount and userId
    return {
        status: "success",
    }
}
            