import data from "@/data.json";

const { incomes, expenses }: Data = data;

// Home Component
const Home = () => (
    <div className="flex min-h-screen justify-center bg-gray-800 p-4">
        <div className="w-full max-w-2xl">
            <Balance incomes={incomes} expenses={expenses} />
            <MoneyList items={incomes} title="Incomes" />
            <MoneyList items={expenses} title="Expenses" />
        </div>
    </div>
);

// MoneyList Component
const MoneyList = ({ items, title }: MoneyList) => (
    <div className="my-4">
        <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
        <div className="space-y-2">
            {items.map((item, index) => (
                <MoneyItem key={index} item={item} />
            ))}
        </div>
    </div>
);

// MoneyItem Component
const MoneyItem = ({ item }: MoneyItem) => (
    <div className="flex items-center justify-between rounded-md bg-gray-700 p-3 transition-colors hover:bg-gray-600">
        <span className="font-semibold text-white">{item.name}</span>
        <span className="text-green-400">৳{item.amount}</span>
    </div>
);

// Balance Component
const Balance = ({ incomes, expenses }: Balance) => {
    const totalIncome = incomes.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    const totalExpense = expenses.reduce((acc, item) => acc + parseFloat(item.amount), 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="my-4 rounded-md bg-gray-700 py-4 text-center text-white">
            <h2 className="text-2xl font-bold">Current Balance</h2>
            <p className="text-xl font-semibold text-green-400">৳{balance.toFixed(2)}</p>
        </div>
    );
};

export default Home;
