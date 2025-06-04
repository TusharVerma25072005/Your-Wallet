"use client"

import { useState } from "react";
import { Button } from "@repo/ui/button";
import { Withdraw } from "../../lib/withdraw";


export const WithdrawBox = () => {
    const [amount, setAmount] = useState("");
    const [accountno, setAccountNo] = useState("");
    const [bank, setBank] = useState("");


    return (
        <div className="flex flex-col items-center justify-center bg-white p-5 rounded-lg shadow-md mt-4">
            <span className="flex justify-content font-bold text-3xl text-blue-700 mt-5">Withdraw Money</span>
            <span className="mt-5">
                Enter Amount :
            </span>
            <span className="flex justify-between items-center mt-2">
                <input
                    type="number"
                    className="border border-gray-300 rounded-md p-2 ml-2"
                    placeholder="Enter amount"
                    min={0}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </span>
            <span className="mt-5">
                Enter Account Number :
            </span>
            <span className="flex justify-between items-center mt-2">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2 ml-2"
                    placeholder="Enter account number"
                    value={accountno}
                    onChange={(e) => setAccountNo(e.target.value)}
                />
            </span>

            <span className="mt-5">
                Select Bank Account :
            </span>
            <span className="flex justify-between items-center mt-2">
                <select className="border border-gray-300 rounded-md p-2 ml-2" onChange={(e) => setBank(e.target.value)} value={bank}>
                    <option value="" disabled>Select your bank</option>
                    <option value="axis-bank">Axis Bank</option>
                    <option value="hdfc-bank">HDFC Bank</option>
                    <option value="statebankofindia">SBI Bank</option>
                    <option value="icici-bank">ICICI Bank</option>
                    <option value="kotak-bank">Kotak Bank</option>
                    <option value="bob">Bank of Baroda</option>
                    <option value="bank-of-india">Bank of India</option>
                    <option value="pnb">Punjab National Bank</option>
                    <option value="canara-bank">Canara Bank</option>
                    <option value="union-bank">Union Bank</option>
                </select>
            </span>
            <span className="mt-5">
                <Button onClick={() => {
                    if (!amount || !accountno) {
                        alert("Please enter both amount and account number");
                        return;
                    }
                    Withdraw({
                        Amount: (amount).toString(),
                        AccountNumber: accountno,
                        Bank: bank
                    }).then((res) => {
                        if (res.success) {
                            alert("Withdrawal successful!");
                            setAmount("");
                            setAccountNo("");
                            setBank("");
                        } else {
                            alert("Withdrawal failed: " + res.message);
                        }
                    }).catch((err) => {
                        console.error("Error during withdrawal:", err);
                        alert("An error occurred during withdrawal. Please try again later.");
                    })



                }}>Withdraw</Button>
            </span>
        </div>
    )
}