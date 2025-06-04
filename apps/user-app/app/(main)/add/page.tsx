import { AddMoneyCard } from "../../components/addMoneyCard"
import { AddMoneySteps } from "../../components/addMoneySteps"
export default function AddMoney() {
    return (
        <div className="flex">
            <AddMoneyCard />
            <AddMoneySteps />
        </div>
    )
}