"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Logo } from "@repo/ui/logo";
import { signUp } from "../../lib/signUp";
import { signIn } from "next-auth/react";

interface SignUpBoxProps {
    setShowLogin?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignUpBox = ({ setShowLogin }: SignUpBoxProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [payId, setPayId] = useState("");
    const [alertText, setAlertText] = useState("");

    return (
        <div className="flex flex-col items-center justify-center bg-white py-6 px-20 rounded-lg shadow-md mt-4">
            <Logo />
            <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-6 text-center tracking-tight">
                Merchant Sign Up
            </h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="text"
                placeholder="Pay ID (e.g.,
                @yourpayid)"
                value={payId}
                onChange={(e) => setPayId(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <Button
                onClick={() => {
                    if (password !== confirmPassword) {
                        setAlertText("Passwords do not match");
                        return;
                    }
                    if (!email || !password || !name || !phone || !payId) {
                        setAlertText("Please fill in all fields");
                        return;
                    }
                    setAlertText("");
                    signUp({ email, password, name, phone, payId })
                        .then((res) => {
                            if (res) {
                                signIn("credentials", {
                                    username: email,
                                    password: password,
                                    redirect: true,
                                    callbackUrl: "/"
                                })

                            }
                        })
                        .catch((error) => {
                            console.error("Sign Up Error:", error);
                            setAlertText("Sign Up failed. Please try again.");
                        });
                    console.log("Sign Up:", { name, email, phone, payId, password });
                    setAlertText("Sign Up successful! Please log in.");
                    if (setShowLogin) setShowLogin(true);
                }}
            >
                Sign Up
            </Button>
            <p className="text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setShowLogin && setShowLogin(true)}
                >
                    Log In
                </span>
            </p>
            {alertText && (
                <p className="text-red-500 text-sm font-bold p-2">
                    {alertText}
                </p>
            )}
        </div>
    )
}