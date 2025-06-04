import { atom } from 'jotai';

interface Transaction {
    id: string;
    amount: number;
    date: string;
    status: string;
    userId: string;
    merchantId: string;
    createdAt?: Date;
    userName?: string;
}

export const TransactionsAtom = atom<Transaction[]>([]);