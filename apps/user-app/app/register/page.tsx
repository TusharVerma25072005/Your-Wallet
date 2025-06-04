"use client"

import { useState } from "react"
import { LoginBox } from "../components/loginBox";
import { SignUpBox } from "../components/signUpBox";
import { HalfScreen } from "../components/loginHalfScreen";

export default function Register() {
    const [showLogin , setShowLogin] = useState<boolean>(true)
    return (
        <div className="grid grid-cols-2 h-screen">
            { showLogin && <LoginBox setShowLogin={setShowLogin}/> }
            <HalfScreen />
            { !showLogin && <SignUpBox setShowLogin={setShowLogin}/> }
        </div>
    )
}