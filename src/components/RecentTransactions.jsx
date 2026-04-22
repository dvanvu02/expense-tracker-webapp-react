import { ArrowRight } from "lucide-react";
import TransactionInforCard from "./TransactionInforCard";
import moment from "moment";

const RecentTransactions = ({ transactions, onMore }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between group">
                <h4 className="text-lg">Recent Transactions</h4>

                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition-colors hover:bg-purple-100 hover:text-purple-700" onClick={onMore}>
                    More <ArrowRight className="text-base" size={15} />
                </button>
            </div>

            <div className="mt-6">
                {transactions?.slice(0, 5)?.map(item => (
                    <TransactionInforCard
                        key={item.id}
                        title={item.name}
                        icon={item.icon}
                        date={moment(item.date).format('Do MMM YYY')}
                        amount={item.amount}
                        type={item.type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default RecentTransactions;