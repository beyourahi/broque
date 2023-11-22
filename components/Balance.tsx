import { formatCurrency } from "lib";

export const Balance = ({ incomes, expenses }: Balance) => {
    const totalIncome = incomes.reduce((acc, item) => acc + item.amount, 0);
    const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="space-y-12 rounded-md bg-white bg-opacity-10 p-8 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-200">Financial Summary</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                    <p className="text-2xl font-semibold text-green-500">
                        ৳{formatCurrency(totalIncome)}
                    </p>
                    <p className="font-medium text-gray-300">Total Income</p>
                    <p className="text-sm text-gray-400">{incomes.length} Entries</p>
                </div>

                <div>
                    <p className="text-3xl font-semibold text-blue-500">
                        ৳{formatCurrency(balance)}
                    </p>
                    <p className="font-medium text-gray-300">Current Balance</p>
                </div>

                <div>
                    <p className="text-2xl font-semibold text-red-500">
                        ৳{formatCurrency(totalExpense)}
                    </p>
                    <p className="font-medium text-gray-300">Total Expense</p>
                    <p className="text-sm text-gray-400">{expenses.length} Entries</p>
                </div>
            </div>
        </div>
    );
};
