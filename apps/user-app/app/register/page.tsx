"use client"

import { useState } from "react"
import { LoginBox } from "../components/loginBox";
import { SignUpBox } from "../components/signUpBox";
import { HalfScreen } from "../components/loginHalfScreen";
import { Logo } from "@repo/ui/logo2";

export default function Register() {
    const [showLogin , setShowLogin] = useState<boolean>(true)
    return (
        <div className="flex grid md:grid-cols-2 h-screen">
            { showLogin && <LoginBox setShowLogin={setShowLogin}/> }
            <HalfScreen />
            { !showLogin && <SignUpBox setShowLogin={setShowLogin}/> }
        </div>
    )
}