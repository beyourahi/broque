import { FC } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAll } from "@vercel/edge-config";
import { TrendingUp, TrendingDown, Wallet2, LogOut, Clock, ArrowUpRight } from "lucide-react";
import bossman from "@/public/bossman.webp";

// Types remain the same
interface User {
    email: string | null;
    picture?: string | null;
}

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

interface FinancialData {
    incomes: Income[];
    expenses: Expense[];
}

interface FinancialSummary {
    totalIncome: number;
    totalExpense: number;
    balance: number;
    incomeCount: number;
    expenseCount: number;
}

// Constants remain the same
const PERMITTED_USERS = [
    "beyourahi@gmail.com",
    "rahikhan360@gmail.com",
    "preetyfarihaafreen@gmail.com"
];

// Utility Functions
const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
        .format(amount)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
};

const calculateFinancialSummary = (data: FinancialData): FinancialSummary => {
    const totalIncome = data.incomes.reduce((acc, item) => acc + item.amount, 0);
    const totalExpense = data.expenses.reduce((acc, item) => acc + item.amount, 0);

    return {
        totalIncome,
        totalExpense,
        balance: totalIncome - totalExpense,
        incomeCount: data.incomes.length,
        expenseCount: data.expenses.length
    };
};

// Components
interface NavbarProps {
    user: User;
}

const Navbar: FC<NavbarProps> = ({ user }) => (
    <div className="flex h-20 items-center justify-between rounded-2xl bg-zinc-900/40 px-6 ring-1 ring-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-3">
            <div className="rounded-xl bg-zinc-900 p-2 ring-1 ring-white/10">
                <Wallet2 className="h-6 w-6 text-emerald-500" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-white/90">
                Finance Dashboard
            </h1>
        </div>

        <div className="flex items-center gap-6">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-emerald-500/20">
                <Image
                    src={user.picture || bossman}
                    alt="User avatar"
                    fill
                    className="object-cover"
                    priority={true}
                />
            </div>

            <LogoutLink className="group flex items-center gap-2 rounded-xl bg-zinc-900/50 px-4 py-2.5 font-medium text-white/70 ring-1 ring-white/5 transition-all hover:bg-zinc-800 hover:text-white/90">
                <LogOut className="h-4 w-4 transition-colors group-hover:text-emerald-500" />
                <span>Sign Out</span>
            </LogoutLink>
        </div>
    </div>
);

interface BalanceCardProps {
    label: string;
    amount: number;
    trend?: "up" | "down";
    entries?: number;
    isMain?: boolean;
}

const BalanceCard: FC<BalanceCardProps> = ({ label, amount, trend, entries, isMain }) => (
    <div
        className={`group relative flex flex-col rounded-2xl p-6 transition-all ${
            isMain
                ? "bg-gradient-to-br from-zinc-900/90 to-black ring-1 ring-white/10 backdrop-blur-xl"
                : "bg-zinc-900/40 ring-1 ring-white/5 hover:bg-zinc-900/60"
        }`}
    >
        <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-white/50">{label}</span>
            {trend && (
                <div
                    className={`flex items-center gap-1 ${
                        trend === "up" ? "text-emerald-500" : "text-rose-500"
                    }`}
                >
                    {trend === "up" ? (
                        <TrendingUp className="h-4 w-4" />
                    ) : (
                        <TrendingDown className="h-4 w-4" />
                    )}
                </div>
            )}
        </div>

        <div className="mt-3 flex items-end justify-between">
            <div className="space-y-1">
                <span
                    className={`block font-mono ${
                        isMain
                            ? "text-4xl font-bold text-white"
                            : "text-2xl font-semibold text-white/80"
                    }`}
                >
                    ৳{formatCurrency(amount)}
                </span>
                {entries !== undefined && (
                    <div className="flex items-center gap-1.5 text-xs font-medium text-white/30">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{entries} transactions</span>
                    </div>
                )}
            </div>
            {isMain && (
                <div className="rounded-lg bg-emerald-500/10 p-2 transition-colors group-hover:bg-emerald-500/20">
                    <ArrowUpRight className="h-5 w-5 text-emerald-500" />
                </div>
            )}
        </div>
    </div>
);

interface BalanceProps {
    summary: FinancialSummary;
}

const Balance: FC<BalanceProps> = ({ summary }) => (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-white/50">Financial Overview</h2>
            <span className="text-sm text-white/30">Last Updated: Today</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <BalanceCard label="Current Balance" amount={summary.balance} isMain />
            <BalanceCard
                label="Total Income"
                amount={summary.totalIncome}
                trend="up"
                entries={summary.incomeCount}
            />
            <BalanceCard
                label="Total Expenses"
                amount={summary.totalExpense}
                trend="down"
                entries={summary.expenseCount}
            />
        </div>
    </div>
);

interface TransactionProps {
    title: "Incomes" | "Expenses";
    items: (Income | Expense)[];
}

const TransactionList: FC<TransactionProps> = ({ title, items }) => (
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium text-white/50">{title}</h2>
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-sm font-medium text-white/40 ring-1 ring-white/5">
                {items.length}
            </span>
        </div>

        <div className="rounded-2xl bg-zinc-900/40 p-1 ring-1 ring-white/5 backdrop-blur-sm">
            <div className="divide-y divide-white/5">
                {items.map((item, index) => (
                    <div
                        key={`${item.name}-${index}`}
                        className="group flex items-center justify-between p-4 transition-all hover:bg-zinc-900"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className={`rounded-lg p-2 ${
                                    item.type === "income"
                                        ? "bg-emerald-500/10 text-emerald-500"
                                        : "bg-rose-500/10 text-rose-500"
                                }`}
                            >
                                {item.type === "income" ? (
                                    <TrendingUp className="h-4 w-4" />
                                ) : (
                                    <TrendingDown className="h-4 w-4" />
                                )}
                            </div>
                            <span className="font-medium text-white/80 group-hover:text-white">
                                {item.name}
                            </span>
                        </div>
                        <span
                            className={`font-mono font-bold ${
                                item.type === "income" ? "text-emerald-500" : "text-rose-500"
                            }`}
                        >
                            {item.type === "income" ? "+" : "-"}৳{formatCurrency(item.amount)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Main Page Component
export const runtime = "edge";

export default async function Home() {
    const { getUser, isAuthenticated: auth } = getKindeServerSession();
    const user = await getUser();
    const isAuthenticated = await auth();

    if (!isAuthenticated || !user.email || !PERMITTED_USERS.includes(user.email)) {
        redirect("/login");
    }

    const data = (await getAll()) as FinancialData;
    const summary = calculateFinancialSummary(data);

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-zinc-900 p-4 md:p-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <Navbar user={user} />
                <Balance summary={summary} />

                <div className="grid gap-8 md:grid-cols-2">
                    <TransactionList title="Incomes" items={data.incomes} />
                    <TransactionList title="Expenses" items={data.expenses} />
                </div>
            </div>
        </div>
    );
}
