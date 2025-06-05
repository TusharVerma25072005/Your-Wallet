"use client"

import { Logo } from "@repo/ui/logo2"
import { signOut } from "next-auth/react"
import { Button } from "@repo/ui/button2"
import { HamburgerMenu } from "./hamburger"

export const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-3 bg-blue-700">
            <HamburgerMenu />
            <Logo />
            <Button onClick={() => {
                signOut({
                    callbackUrl: "/register"
                })
                return
            }}>Log Out</Button>

        </div>
    )
}