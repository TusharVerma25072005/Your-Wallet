import { AddMoneyCard } from "../../components/addMoneyCard"
import { AddMoneySteps } from "../../components/addMoneySteps"
export default function AddMoney() {
    return (
        <div className="flex flex-col md:flex-row">
            <AddMoneyCard />
            <AddMoneySteps />
        </div>
    )
}