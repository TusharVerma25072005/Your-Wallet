'use client'

import { useAtom } from "jotai";
import { BalanceAtom } from "@repo/store/balance";


export const BalanceCard = () => {
    const [balance] = useAtom(BalanceAtom);

    return (
        <div className="p-6 flex justify-center">
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-3xl p-6 w-full max-w-sm shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 opacity-20 blur-2xl z-0"></div>

                <div className="relative z-10 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <div className="bg-white bg-opacity-10 p-2 rounded-full">
                        </div>
                        <h2 className="text-xl font-semibold tracking-wide">Wallet Balance</h2>
                    </div>

                    <p className="text-sm text-blue-200">Your current balance</p>

                    <p className="text-4xl font-extrabold tracking-wide mt-2">₹{balance.toFixed(2)}</p>

                </div>
            </div>
        </div>
    )
}