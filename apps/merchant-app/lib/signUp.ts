"use server"

import db from "@repo/db/client"

interface SignUpProps {
    name: string;
    password: string;
    email: string;
    phone: string;
    payId: string;
}

export const signUp = async ( { name , password, email , phone, payId } : SignUpProps ) => {
    if (!name || !password || !email || !phone || !payId) {
        throw new Error("All fields are required");
    }
    payId = payId.toLowerCase() + "@yourwallet.com";
    const existingUser = await db.merchant.findFirst({
        where: {
            OR: [
                { email },
                { phone },
                { payId }
            ]
        }
    });
    if( existingUser ) {
        throw new Error("User with this email, phone or payId already exists");
    }
    const newUser = await db.merchant.create({
        data: {
            name,
            password,
            email,
            phone,
            payId
        }
    });
    return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        payId: newUser.payId
    };
}