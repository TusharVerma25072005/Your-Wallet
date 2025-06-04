import { HomePageCarousel } from "../components/carousel"
import { BalanceCard } from "../components/BalanceCard"
import { LastFiveTransaction } from "../components/lastFiveTransaction"
export default function Home() {
    return (
        <div className="grid grid-cols-2 gap-2 m-4 p-3">
            <div className="flex flex-col">
                <BalanceCard />
                <LastFiveTransaction />
            </div>
            <div className="flex flex-col">
            <HomePageCarousel />
            </div>

        </div>
    )
}