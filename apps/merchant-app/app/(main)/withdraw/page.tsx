import { WithdrawSteps } from "../../components/withdrawSteps"
import { WithdrawBox } from "../../components/withdrawBox"

export default function Withdraw() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <WithdrawBox />
            <WithdrawSteps />
        </div>
    )
}