'use server'
import db from '@repo/db/client'
import { authOptions } from './authOptions';
import { getServerSession } from 'next-auth/next';

export const Withdraw = async ({Bank , Amount, AccountNumber} : { Bank : string , Amount : string, AccountNumber : string}) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user ) {
            throw new Error("Unauthorized: No session found");
        }
        if (!Bank || !Amount || !AccountNumber) {
            throw new Error("All fields are required");

        }
        const amountNumber = parseFloat(Amount);
        const accountNumber = parseInt(AccountNumber, 10);
        const bank = Bank.trim();
        if (isNaN(amountNumber) || amountNumber <= 0) {
            throw new Error("Invalid amount");
        }
        const bal = await db.merchant.findUnique({
            where: {
                // @ts-ignore
                id: session.user.id,
            },
            select: {
                balance: true,
            }
        });
        if (!bal || bal.balance < amountNumber) {
            throw new Error("Insufficient balance");
        }
        console.log("bank", bank);
        console.log("new balance", bal.balance - amountNumber);
        await db.$transaction(async (tx) => {      
            const transaction = await tx.transaction.create({
                data: {
                    status : "COMPLETED WITHDRAW",
                    amount: -amountNumber,
                    //@ts-ignore
                    merchantId: session.user?.id,
                    userId: bank, 
                    
                },
            });
            await tx.merchant.update({
                where: {
                    // @ts-ignore
                    id: session.user?.id,
                },                data: {
                    balance: {
                        decrement: amountNumber,
                    },
                },
            });
            
        });

        return {
            success: true,
            message: "Withdrawal request processed successfully",
        };
    }catch (e){
        console.log("Error in Withdraw function:", e);
        throw new Error("Failed to process withdrawal request");
    }
}