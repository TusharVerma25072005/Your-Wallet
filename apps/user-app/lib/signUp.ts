"use server"

import db from "@repo/db/client"

interface SignUpData {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export const signUp = async ( props : SignUpData ) => {
    const { name, email, phone, password } = props;
    console.log("SignUp data:", props);

    try {
        const user = await db.user.create({
            data: {
                name,
                email,
                phone,
                password
            }
        });

        console.log("User created:", user);
        return {
            success : true,
            user : {
                id : user.id,
                name : user.name,
                email : user.email,
                phone : user.phone
            },
            credentials : {
                id : user.id,
                password : user.password
            }
        };
    } catch (error) {
        console.error("Error creating user:", error);
        return {
            success : false,
            error : "Error creating user"
        }
    }
}