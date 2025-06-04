"use client"
import React, { useMemo } from 'react';
import { Line } from 'react-chartjs-2';
import { useAtom } from 'jotai';
import { TransactionsAtom } from '@repo/store/transaction';
import { parseISO, isToday, format } from 'date-fns';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export const TransactionChart = () => {
    const [transactions] = useAtom(TransactionsAtom);
    const { labels, dataPoints } = useMemo(() => {
        const hourlyMap: Record<string, number> = {};
        for (let i = 0; i < 24; i++) {
            const hour = `${i.toString().padStart(2, '0')}:00`;
            hourlyMap[hour] = 0;
        }

        if (!transactions) return { labels: [], dataPoints: [] };

        transactions.forEach((tx) => {
            const date = parseISO(tx.date);
            if (isToday(date)) {
                const hour = format(date, 'HH:00');
                if (!hourlyMap[hour]) {
                    hourlyMap[hour] = 0;
                }
                hourlyMap[hour] += tx.amount;
            }
        });

        return {
            labels: Object.keys(hourlyMap),
            dataPoints: Object.values(hourlyMap),
        };
    }, [transactions]);

    if (!transactions || transactions.length === 0 || dataPoints.length === 0) {
        return <div>No transactions found for today</div>;
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Amount',
                data: dataPoints,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.1)',
                tension: 0.3,
                fill: true,
                pointRadius: 3,
                pointHoverRadius: 5,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Hours of Day',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Amount (₹)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' as const,
            },
        },
    };

    return <Line data={data} options={options} />;
};
