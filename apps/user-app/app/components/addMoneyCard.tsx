"use client"
import { Button } from "@repo/ui/button"
import { useState } from "react";
import { addMoney } from "../../lib/addMoney";

export const AddMoneyCard = () => {
    const [amount, setAmount] = useState(0);
    const [bank, setBank] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    
    const handleAddMoney = async () => {
        setError("");
        
        // Validation
        if (!bank) {
            setError("Please select a bank");
            return;
        }
        
        if (amount <= 0) {
            setError("Please enter a valid amount");
            return;
        }
        
        if (amount > 100000) {
            setError("Maximum amount is ₹1,00,000");
            return;
        }
        
        setLoading(true);
        
        try {
            const res = await addMoney({ amount, bank });
            if (res.status === "success") {
                setAmount(0);
                setBank("");
                alert("Money added successfully!");
            } else {
                setError(res.message || "Failed to add money");
            }
        } catch (error) {
            setError("An error occurred while adding money");
            console.error("Add money error:", error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col justify-between items-center w-8/9 md:w-1/2 bg-white rounded-lg p-6 m-3 shadow-lg">
            <h2 className="font-bold text-3xl text-blue-700 mb-6">Add Money</h2>
            
            {error && (
                <div className="w-full p-3 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}
            
            <div className="w-full mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Bank Account:
                </label>
                <select 
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    value={bank} 
                    onChange={(e) => setBank(e.target.value)}
                    disabled={loading}
                >
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
            </div>
            
            <div className="w-full mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (₹):
                </label>
                <input 
                    type="number" 
                    className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    placeholder="Enter amount" 
                    min={1}
                    max={100000}
                    value={amount || ""} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    disabled={loading}
                />
            </div>
            
            <Button 
                onClick={handleAddMoney}
                
            >
                {loading ? "Processing..." : "Add Money"}
            </Button>
        </div>
    );
};