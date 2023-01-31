import data from "@/data.json";

const { incomes, expenses }: Data = data;

const Home = () => {
    let totalIncome = 0;
    let totalExpenses = 0;
    let balance = 0;

    incomes.forEach((item: Income) => (totalIncome += Number(item.amount)));
    expenses.forEach((item: Expense) => (totalExpenses += Number(item.amount)));
    balance = totalIncome - totalExpenses;

    return (
        <main className="flex flex-col items-center">
            {/*//! Balance */}
            <h1 className="my-24 text-5xl font-extrabold">
                Balance: {balance.toLocaleString()} /-
            </h1>

            <div className="flex space-x-52">
                {/*//! Incomes */}
                <div className="space-y-10">
                    <h1 className="text-3xl font-bold">
                        Total Income: {totalIncome.toLocaleString()} /-
                    </h1>
                    <div className="divide-y-2 divide-white/30">
                        {incomes.map((income, index) => (
                            <p key={index} className="text-md py-4">
                                {income.name} -{" "}
                                <span className="font-bold">
                                    {Number(income.amount).toLocaleString()} /-
                                </span>
                            </p>
                        ))}
                    </div>
                    <br />
                </div>
                {/*//! Expenses */}
                <div className="space-y-10">
                    <h1 className="text-3xl font-bold">
                        Total Expenses: {totalExpenses.toLocaleString()} /-
                    </h1>
                    <div className="divide-y-2 divide-white/30">
                        {expenses.map((expense, index) => (
                            <p
                                key={index}
                                className={`text-md py-4 ${expense.badPurchase && `bg-red-500`}`}
                            >
                                {expense.name} -{" "}
                                <span className="font-bold">
                                    {Number(expense.amount).toLocaleString()} /-
                                </span>
                            </p>
                        ))}
                    </div>
                    <br />
                </div>
            </div>
        </main>
    );
};

export default Home;
