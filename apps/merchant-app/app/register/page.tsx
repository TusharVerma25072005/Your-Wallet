"use client"
import { LoginBox } from "../components/loginBox";
import { useState } from "react";
import { SignUpBox } from "../components/signUpBox";

export default function Register() {
        const [showLogin, setShowLogin] = useState(true);
        return (<div className="flex items-center justify-center h-screen bg-blue-700">
                {showLogin ? (
                        <LoginBox setShowLogin={setShowLogin} />) : (
                        <SignUpBox setShowLogin={setShowLogin} />
                )}
        </div>)
}