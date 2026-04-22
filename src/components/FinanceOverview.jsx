import { addThousandsSeparator } from "../util/util";
import CustomPieChart from "./CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncomes, totalExpenses }) => {
    const COLORS = ["#591688", "#a0090e", "#010630"];

    const balanceData = [
        { name: "Total Balance", amount: totalBalance },
        { name: "Total Expenses", amount: totalExpenses },
        { name: "Total Incomes", amount: totalIncomes }
    ];

    return (
        <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Financial Overview</h5>
            </div>

            <CustomPieChart
                data={balanceData}
                label="Total Balance"
                totalAmount={`${addThousandsSeparator(totalBalance)}₫`}
                colors={COLORS}
                showTextAnchor
            />

        </div>
    )
}

export default FinanceOverview;