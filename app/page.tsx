import { getAll } from "@vercel/edge-config";
import { authOptions, formatCurrency } from "lib";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

//! Home Component
const Home = async () => {
    const session = await getServerSession(authOptions);
    const { incomes, expenses }: Data = await getAll();

    if (!session) redirect("/login");

    if (session?.user?.name !== "beyourahi@gmail.com") redirect("/login");

    return (
        <div className="flex min-h-screen justify-center p-4">
            <div className="w-full max-w-7xl space-y-10">
                <Balance incomes={incomes} expenses={expenses} />
                <div className="grid gap-6 md:grid-cols-2">
                    <MoneyList items={incomes} title="Incomes" />
                    <MoneyList items={expenses} title="Expenses" />
                </div>
            </div>
        </div>
    );
};

//! MoneyList Component
const MoneyList = ({ items, title }: MoneyList) => (
    <div className="space-y-10 divide-y-2 divide-white/20 rounded-lg bg-white bg-opacity-10 p-6 shadow-xl">
        <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold text-gray-200">{title}</h2>
            <p className="text-base font-bold text-gray-400">({items.length})</p>
        </div>

        <div className="space-y-4 pt-8">
            {items.map((item, index) => (
                <MoneyItem key={index} item={item} />
            ))}
        </div>
    </div>
);

//! MoneyItem Component
const MoneyItem = ({ item }: MoneyItem) => (
    <div className="flex items-center justify-between rounded-lg p-4 transition-all duration-300 ease-in-out lg:hover:bg-white lg:hover:bg-opacity-10">
        <span className="text-lg font-semibold text-gray-300">{item.name}</span>
        <span
            className={`text-xl font-bold ${
                item.type === "income" ? "text-green-500" : "text-red-500"
            }`}
        >
            ৳{formatCurrency(item.amount)}
        </span>
    </div>
);

//! Balance Component
const Balance = ({ incomes, expenses }: Balance) => {
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

export default Home;
