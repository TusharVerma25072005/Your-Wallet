"use server"
import db from "@repo/db/client"

export const SearchUsers = async (searchTerm: string) => {

    const users = await db.merchant.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    email: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    phone: {
                        contains: searchTerm,
                        mode: "insensitive",
                    },
                },
                {
                    payId: {
                        contains: searchTerm,
                        mode: "insensitive",
                    }
                }
            ],
        },
        select: {
            id : true,
            name: true,
            email: true,
            phone: true,
            payId: true,
        },
    });

    return users;
}