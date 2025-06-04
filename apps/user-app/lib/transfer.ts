"use server"

import db from "@repo/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"
export async function transfer( to : string , amount : number) {
    
    const session = await getServerSession(authOptions)
    if (!session) {
        throw new Error("Unauthorized")
    }
    //@ts-ignore
    const from = session.user?.id
    
    const fromUser = await db.user.findUnique({
        where: {
            id: from,
        },
    })
    const toUser = await db.merchant.findUnique({
        where: {
            id: to,
        },
    })
    if (!fromUser || !toUser) {
        throw new Error("User not found")
    }
    if (fromUser.balance < amount) {
        throw new Error("Insufficient balance")
    }
    await db.$transaction([
        db.user.update({
            where: {
                id: from,
            },
            data: {
                balance: fromUser.balance - amount,
            },
        }),
        db.merchant.update({
            where: {
                id: to,
            },
            data: {
                balance: toUser.balance + amount,
            },
        }),
        db.transaction.create({
            data: {
                amount : amount,
                status: "COMPLETED",
                userId : from,
                merchantId : to,
            }
        }),
       
    ])
    .catch((err) => {
        async function failed(){
            await db.transaction.create({
                data: {
                    amount : amount,
                    status: "FAILED",
                    userId : from,
                    merchantId : to,
                }
            })
        }
        failed()
        console.error("Transaction failed", err)
        throw new Error("Transaction failed")
    }).finally(() => {
        console.log("Transaction completed")
    })

    return
}