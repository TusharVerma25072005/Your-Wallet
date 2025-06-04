"use client"
import { useState } from "react"
import { Button } from "@repo/ui/button"
import { signIn } from "next-auth/react"
import { signUp } from "../../lib/signUp"


export const SignUpBox = ({setShowLogin} : {setShowLogin : React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [alertText, setAlertText] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [name , setName] = useState<string>("");
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [error , setError] = useState<string>("");

    const handleSubmit = async () => {
        setIsLoading(true)
        
        try{
            const res = await signUp({
                name,
                email,
                phone,
                password: pass
            })
            console.log(res)
            if(res.success) {
                await signIn("credentials", {
                    username: email,
                    password: pass,
                    redirect: true,
                    callbackUrl: "/"
                })
            }else{
                setError(res.error || "Error signing up")
                setIsLoading(false)
            }
        }catch(err) {
            console.error(err)
            setError("Error signing up")
            setIsLoading(false)
        }
    }

    return (
        <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <input className="border outline-none px-2 py-1 m-2 rounded" type="text" placeholder="Enter name" onChange={
                        () => {
                            setName((document.getElementsByTagName("input")[0] as HTMLInputElement).value)
                        }} />
                    <input className="border outline-none px-2 py-1 m-2 rounded" type="text" placeholder="Enter email" onChange={
                        () => {
                            setEmail((document.getElementsByTagName("input")[1] as HTMLInputElement).value)
                        }} />
                    <input className="border outline-none px-2 py-1 m-2 rounded" type="text" placeholder="Enter phone no" onChange={
                        () => {
                            setPhone((document.getElementsByTagName("input")[2] as HTMLInputElement).value)
                        }} />
                    <input className="border outline-none px-2 py-1 m-2 rounded" type="password" placeholder="Enter password" onChange={
                        () => {
                            setPass((document.getElementsByTagName("input")[3] as HTMLInputElement).value)
                        }} />
                </div>  
            </div>
            <span>
                <Button onClick={() => {
                    if (name.length == 0) {
                        setAlertText("Please enter a valid name")
                        return
                    }
                    else if (username.length == 0) {
                        setAlertText("Please enter a valid mobile no, username or email")
                        return
                    }
                    else if (phone.length == 0) {
                        setAlertText("Please enter a valid phone no")
                        return
                    }
                    else if (pass.length == 0) {
                        setAlertText("Please enter a valid password")
                        return
                    }else {
                        handleSubmit()
                        return
                    }
                }}>
                    Sign Up
                </Button>
            </span>
            <span className="text-sm font-bold p-3">
                Already have an account? <span className="text-blue-700 cursor-pointer" onClick={() => {
                    setShowLogin(true)
                }}>Login</span>
            </span>
            <span className="text-red-500 text-sm font-bold p-3">
                {alertText}
            </span>

        </div>
    )
}