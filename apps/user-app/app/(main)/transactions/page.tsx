"use client"

import { useAtom } from "jotai"
import { TransactionCard } from "../../components/transactionCard"
import { TransactionsAtom } from "@repo/store/transaction"


export default function Transactions() {
    const [transactions] = useAtom(TransactionsAtom)
    
    if (!transactions || transactions.length === 0) {
        return <div>No transactions found</div>
    }
    
    return (
        <div>
            
            {transactions.map((transaction) => (
                <TransactionCard key={transaction.id} {...transaction} />
            ))}
            
        </div>
    )
}