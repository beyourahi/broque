import { redirect } from "next/navigation";
import Image from "next/image";
import bossman from "@/public/bossman.webp";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAll } from "@vercel/edge-config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const runtime = "edge";

interface Income {
    name: string;
    amount: number;
    type: "income";
}

interface Expense {
    name: string;
    amount: number;
    badPurchase?: boolean;
    type: "expense";
}

interface Data {
    incomes: Income[];
    expenses: Expense[];
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2, // Ensures two decimal places
        maximumFractionDigits: 2 // Limits to two decimal places
    })
        .format(amount)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");

export default async function Home() {
    const { getUser, isAuthenticated: auth } = getKindeServerSession();
    const user = await getUser();
    const isAuthenticated = await auth();
    const permitted_users = [
        "beyourahi@gmail.com",
        "rahikhan360@gmail.com",
        "preetyfarihaafreen@gmail.com"
    ];

    if (!isAuthenticated || !permitted_users.includes(user.email!)) redirect("/login");

    return (
        <div className="flex flex-grow justify-center p-4">
            <div className="w-full max-w-7xl space-y-10">
                <Navbar />

                <Balance />

                <div className="grid gap-6 md:grid-cols-2">
                    <MoneyList title="Incomes" />
                    <MoneyList title="Expenses" />
                </div>
            </div>
        </div>
    );
}

const Navbar = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="flex h-20 items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-200 sm:text-3xl">Broke AF 😢💸</h1>

            <div className="flex items-center gap-6">
                <div className="relative h-[28px] w-[28px] md:h-[30px] md:w-[30px]">
                    <Image
                        src={user.picture! || bossman}
                        alt="User avatar"
                        fill
                        className="rounded-full"
                        priority={true}
                    />
                </div>

                <LogoutLink className="transform-gpu rounded-xl bg-red-500 px-7 py-2.5 font-bold transition-all duration-300 ease-in-out hover:bg-red-700">
                    Log Out
                </LogoutLink>
            </div>
        </div>
    );
};

const Balance = async () => {
    const { incomes, expenses }: Data = await getAll();

    const totalIncome = incomes.reduce((acc, item) => acc + item.amount, 0);
    const totalExpense = expenses.reduce((acc, item) => acc + item.amount, 0);
    const balance = totalIncome - totalExpense;

    return (
        <div className="space-y-12 rounded-md bg-white bg-opacity-10 p-8 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-gray-200">Financial Summary (Lifetime)</h2>

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

const MoneyList = async ({ title }: { title: string }) => {
    const { incomes, expenses }: Data = await getAll();
    const items = title === "Incomes" ? incomes : expenses;

    return (
        <div className="space-y-10 divide-y-2 divide-white/20 rounded-lg bg-white bg-opacity-10 p-6 shadow-xl">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-200">{title}</h2>
                <p className="text-base font-bold text-gray-400">({items.length})</p>
            </div>

            <div className="space-y-4 pt-8">
                {items.map((item, index) => (
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
                ))}
            </div>
        </div>
    );
};
