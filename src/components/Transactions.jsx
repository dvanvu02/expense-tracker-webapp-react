import { ArrowRight } from "lucide-react";
import TransactionInfoCard from "./TransactionInforCard";
import moment from "moment";

const Transactions = ({ transactions, onMore, type, title }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">{title}</h5>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 text-sm text-gray-700 transition-colors hover:bg-purple-100 hover:text-purple-700 cursor-pointer" onClick={onMore}>
                    More <ArrowRight className="text-base" size={15} />
                </button>
            </div>

            <div className="mt-6">
                {transactions?.slice(0, 5)?.map(item => (
                    <TransactionInfoCard
                        key={item.id}
                        title={item.name}
                        icon={item.icon}
                        date={moment(item.date).format("Do MMM YYYY")}
                        amount={item.amount}
                        type={type}
                        hideDeleteBtn
                    />
                ))}
            </div>
        </div>
    )
}

export default Transactions;