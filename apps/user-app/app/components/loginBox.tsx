"use client"
import { useState , useEffect } from "react"
import { Button } from "@repo/ui/button"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { Logo } from "@repo/ui/logo2"

export const LoginBox = ( {setShowLogin} : {setShowLogin : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [inp , setInp] = useState<string>("")
    const [pass , setPass] = useState<string>("")
    const [alertText , setAlertText] = useState<string>("")
    const [showPass, setShowPass] = useState<boolean>(false)
    const searchParams = useSearchParams()
    
    useEffect(() => {
        const error = searchParams.get("error")
        if (error === "CredentialsSignin") {
            setAlertText("Invalid email or password")
        }
    }, [searchParams])

    const handleSignIn = async () => {
        const res = await signIn("credentials", {
            username: inp,
            password: pass,
            redirect: true,
            callbackUrl: "/"
        })


        if (res?.error) {
            setAlertText("Invalid credentials")
        } else {
            setAlertText("")
        }


    }

    return (
        <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="md:hidden my-4">    
                <Logo />
            </div>
            <div className="flex flex-col items-center justify-center">
                <input className = "border outline-none px-2 py-1 my-1 mx-2 rounded" type="text" placeholder="Enter mobile no , username or email" onChange={
                    ()=> {
                        setInp((document.getElementsByTagName("input")[0] as HTMLInputElement).value)
                } } />
                {showPass && <input className = "border outline-none px-2 py-1 my-1 mx-2 rounded" type="password" placeholder="Enter password" onChange={
                    () => {
                        setPass((document.getElementsByTagName("input")[1] as HTMLInputElement).value)
                    }
                } /> }
            </div>
            <span>
                <Button onClick = { () => {
                    if(inp.length == 0) {
                        setAlertText("Please enter a valid mobile no, username or email")
                        return
                    }
                    else if (inp.length != 0 && !showPass) {
                        setShowPass(true)
                        return
                    }
                    else if(pass.length == 0) {
                        setAlertText("Please enter a valid password")
                        return
                    }
                    else if (inp.length != 0 && pass.length != 0) {
                        // login function
                        handleSignIn()
                        
                        return
                    }
                } } >
                    Login
                </Button>
            </span>
            <span className="text-sm font-bold p-3">
                Don't have an account? <span className="text-blue-700 cursor-pointer" onClick={() => {
                    setShowLogin(false)
                }}>Sign Up</span>
            </span>
            <span className="text-red-500 text-sm font-bold p-2">
                {alertText}
            </span>
        </div>
    )
}
