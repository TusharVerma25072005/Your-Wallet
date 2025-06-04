"use client"

import { Logo } from "../../../../packages/ui/src/logo"
import { useState } from "react"
import { Button } from "@repo/ui/button"
import { signIn } from "next-auth/react"

interface LoginBoxProps {
    setShowLogin?: React.Dispatch<React.SetStateAction<boolean>>;
}


export const LoginBox = ({ setShowLogin }: LoginBoxProps) => {
    const [inp, setInp] = useState("")
    const [password, setPassword] = useState("")

    const handleSignIn = async () => {
        if (!inp || !password) {
            alert("Please enter both email/phone and password");
            return;
        }

        const res = await signIn("credentials", {
            username: inp,
            password: password,
            redirect: true,
            callbackUrl: "/"
        });

        if (res?.error) {
            alert("Invalid credentials");
        } else {
            alert("Login successful");
        }
    }


    return (
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-md mt-4">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-6 text-center tracking-tight">
                Merchant Login
            </h1>
            <input
                type="text"
                placeholder="Email or Phone"
                value={inp}
                onChange={(e) => setInp(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <Button onClick={() => {
                handleSignIn();
            }}>Log In</Button>
            <p className="text-sm text-gray-500 mt-4">
                Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => setShowLogin && setShowLogin(false)}>Sign Up</span>
            </p>
        </div>

    )
}
