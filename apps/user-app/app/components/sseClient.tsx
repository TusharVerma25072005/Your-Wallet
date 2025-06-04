'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { BalanceAtom } from '@repo/store/balance';
import { TransactionsAtom } from '@repo/store/transaction';

export const SseClient = ({ token }: { token: string }) => {
    const [, setBalance] = useAtom(BalanceAtom);
    const [, setTransactions] = useAtom(TransactionsAtom);

    useEffect(() => {
        const eventSource = new EventSource(`/api/sse?token=${token}`);

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data)
            console.log(data.transaction)
            setBalance(data.balance.balance)
            setTransactions(data.transaction);
        };
        return () => {
            eventSource.close();
        };
    }, [token, setBalance, setTransactions]);

    return null;
};
