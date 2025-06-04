"use client"

import { useAtom } from "jotai";
import { TransactionsAtom } from "@repo/store/transaction";
import { TransactionCard } from "../../components/transactionCard";

export default function TransactionsPage() {
    const [transactions] = useAtom(TransactionsAtom);
    if (!transactions || transactions.length === 0) {
        return <div>No transactions found</div>;
    }
    return (
        <div>
            {transactions.map((transaction) => (
                <TransactionCard key={transaction.id} {...transaction} />
            ))}
        </div>
    );
}