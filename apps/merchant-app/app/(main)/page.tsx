import { BalanceCard } from "../components/balanceCard";
import { TransactionChart } from "../components/dashboardChanrt";
export default function Home() {
    return (
        <div>
            <BalanceCard />
            <TransactionChart />
        </div>
    );
}