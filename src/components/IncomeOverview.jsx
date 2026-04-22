import { useEffect, useState } from "react";
import { prepareIncomeLineChartData } from "../util/util";
import CustomLineChart from "./CustomLineChart";
import { Plus } from "lucide-react";

const IncomeOverview = ({ transactions, onAddIncome }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (!transactions || transactions.length === 0) return;

        const result = prepareIncomeLineChartData(transactions);
        console.log(result);
        setChartData(result);

        return () => {

        };
    }, [transactions]);

    return (
        <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h5 className="text-lg">Income Overview</h5>
                    <p className="text-xs text-gray-400 mt-0 5">
                        Track your earnings over time and analyze your income trends.
                    </p>
                </div>

                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-800 font-semibold hover:bg-green-200 transition"
                    onClick={onAddIncome}>
                    <Plus size={15} className="text-lg" />Add Income
                </button>
            </div>

            <div className="h-[350px] w-full mt-6">
                {/* Create line chart */}
                <CustomLineChart data={chartData} />
            </div>
        </div>
    )
}

export default IncomeOverview;