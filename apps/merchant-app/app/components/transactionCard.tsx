interface transactionCardProps {
    id: string;
    userName?: string;
    amount: number;
    status: string;
    date: string;
    merchantId: string;
}

export const TransactionCard = (transaction: transactionCardProps) => {
    return (
        <div>
            <div className="flex items-center justify-between w-full  p-4  mt-2 bg-gray-100  opacity-90 border-b border-gray-300">
                <div className="flex items-center">
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${transaction.userName}`} alt="Merchant Logo" className="w-10 h-10 rounded-full" />
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{transaction.userName}</h2>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className={`text-lg font-semibold ${transaction.status === 'COMPLETED' ? 'text-green-500' : 'text-red-500'}`}>
                        {transaction.status}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.amount.toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}