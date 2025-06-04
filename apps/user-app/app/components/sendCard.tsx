"use client"

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { transfer } from "../../lib/transfer";

interface SendMoneyCardProps {
    payId: string;
    name: string;
    email: string;
    phone: string;
    setShowCard: (showCard: boolean) => void;
    id: string;
}

export const SendMoneyCard = (Props: SendMoneyCardProps) => {
    const [amount, setAmount] = useState(0);

    return (
        <div >
            <div className="flex flex-col items-center justify-between w-full  p-4  mt-2 bg-white  opacity-90 border-b border-gray-300 rounded-lg">
                <div className="flex items-center flex-col justify-center">
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${Props.payId}`} alt="Merchant Logo" className="w-20 h-20 rounded-full" />
                    <div className=" flex flex-col items-center justify-center my-4">
                        <h2 className="text-lg font-semibold">{Props.name}</h2>
                        <h3 className="text-sm text-gray-600">{Props.payId}</h3>
                        <p className="text-sm text-gray-500">{Props.email}</p>
                        <p className="text-sm text-gray-500">{Props.phone}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end my-2">
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Enter amount"
                        className="px-2 py-1 border border-gray-300 rounded-md"
                    />
                </div>
                <div>

                    <Button onClick={() => {
                        
                        transfer(Props.id, amount).then(() => {
                            alert("Transaction Successful");
                            Props.setShowCard(false);
                        }).catch((err) => {
                            alert(err);
                        })

                     }}>
                        Send
                    </Button>
                    <button className="bg-red-700 text-white px-4 py-2 rounded-lg mt-4 font-bold hover:bg-red-500 transition-colors ml-3" onClick={() => {
                        Props.setShowCard(false);
                    }} >
                        Cancel
                    </button>
                </div>


            </div>
        </div>
    )
}