'use client';

import React from 'react';
import { useAtom } from 'jotai';
import { TransactionsAtom } from '@repo/store/transaction';

const statusColor = {
  completed: 'text-green-600',
  pending: 'text-yellow-600',
  failed: 'text-red-600',
};

export const LastFiveTransaction = () => {
  const [transactions] = useAtom(TransactionsAtom);
  
  const lastFiveTransactions = [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);
    
  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Last Transactions</h2>
      {lastFiveTransactions.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No transactions yet</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {lastFiveTransactions.map((tx) => (
          <li key={tx.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-800 font-medium">₹{tx.amount}</p>
              <p className="text-xs text-gray-500">{tx.date} • {tx.userName}</p>
            </div>
            <span className={`text-sm font-semibold ${statusColor[tx.status as keyof typeof statusColor]}`}>
              {tx.status}
            </span>
          </li>
        ))}
      </ul>
      )
    }
    </div>
  );
};
