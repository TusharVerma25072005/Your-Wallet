"use client"

import { Logo } from "@repo/ui/logo"
import { Button } from "@repo/ui/button"
import { signOut } from "next-auth/react"
import { HamburgerMenu } from "./hamburger"



export const TopBar = () => {
    return (
        <div className="flex justify-between items-center px-3">
            <HamburgerMenu />
            <Logo />
            <Button onClick = {()=>{ 
                signOut({
                    callbackUrl: "/register"
                })
                return
            }}>Log Out</Button>

        </div>
    )
}