import { Download, LoaderCircle, Mail } from "lucide-react";
import TransactionInfoCard from "./TransactionInforCard";
import moment from "moment";
import { useState } from "react";

const ExpenseList = ({ transactions, onDelete, onDownload, onEmail }) => {
    const [loading, setLoading] = useState(false);

    const handleEmail = async () => {
        setLoading(true);
        try {
            await onEmail();
        } finally {
            setLoading(false);
        }
    }

    const handleDownload = async () => {
        setLoading(true);
        try {
            await onDownload();
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="bg-white p-5 rounded-xl shadow-xl border border-gray-100">
            <div className="flex items-center justify-between">
                <h5 className="text-lg">Expense Sources</h5>
                <div className="flex items-center justify-end gap-2">
                    <button disabled={loading} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-purple-100 hover:text-purple-800" onClick={handleEmail}>
                        {loading ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animated-spin" /> Emailing...
                            </>
                        ) : (
                            <>
                                <Mail size={15} className="text-base" />Email
                            </>
                        )}
                    </button>

                    <button disabled={loading} className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-md hover:bg-purple-100 hover:text-purple-800" onClick={handleDownload}>
                        {loading ? (
                            <>
                                <LoaderCircle className="w-4 h-4 animated-spin" />Downloading...
                            </>
                        ) : (
                            <>
                                <Download size={15} className="text-base" /> Download
                            </>
                        )}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Display the Expenses */}
                {transactions?.map((expense) => (
                    < TransactionInfoCard
                        key={expense.id}
                        title={expense.name}
                        icon={expense.icon}
                        date={moment(expense.date).format('Do MMM YYYY')}
                        amount={expense.amount}
                        type="Expense"
                        onDelete={() => onDelete(expense.id)}
                    />
                ))}
            </div>
        </div>
    )
}

export default ExpenseList;