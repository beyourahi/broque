import { FC } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAll } from "@vercel/edge-config";
import { TrendingUp, TrendingDown, Wallet2, LogOut, Clock, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    <Card className="border-0 bg-zinc-900/40 backdrop-blur-xl">
        <CardContent className="flex h-20 items-center justify-between p-6">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-zinc-900 p-2 ring-1 ring-white/10">
                    <Wallet2 className="h-6 w-6 text-emerald-500" />
                </div>
                <h1 className="text-xl font-semibold tracking-tight text-white/90">Broke AF 😭</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-emerald-500/20">
                    <Image
                        src={user.picture || bossman}
                        alt="User avatar"
                        fill
                        className="object-cover"
                        priority={true}
                    />
                </div>

                <LogoutLink>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-0 bg-zinc-900 px-4 font-semibold uppercase text-white/70 transition-all duration-200 ease-in-out hover:bg-red-500/10 hover:!text-red-500 hover:text-white/90"
                    >
                        <LogOut />
                        <span>Log Out</span>
                    </Button>
                </LogoutLink>
            </div>
        </CardContent>
    </Card>
);

interface BalanceCardProps {
    label: string;
    amount: number;
    trend?: "up" | "down";
    entries?: number;
    isMain?: boolean;
}

const BalanceCard: FC<BalanceCardProps> = ({ label, amount, trend, entries, isMain }) => (
    <Card
        className={`group rounded-2xl border-0 transition-all ${
            isMain
                ? "border-0 bg-gradient-to-br from-zinc-900/90 to-black backdrop-blur-xl"
                : "border-white/5 bg-zinc-900/40 hover:bg-zinc-900/60"
        }`}
    >
        <CardContent className="p-6">
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
        </CardContent>
    </Card>
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
            <Badge
                variant="outline"
                className="rounded-full border-0 bg-zinc-900 py-1 text-white/40"
            >
                {items.length}
            </Badge>
        </div>

        <Card className="rounded-2xl border-0 border-white/5 bg-zinc-900/40 p-1 backdrop-blur-sm">
            <CardContent className="p-1">
                {items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="flex flex-col gap-1.5">
                        {index > 0 && <Separator className="mt-1.5 bg-white/5" />}
                        <div className="group flex items-center justify-between rounded-xl p-3 transition-all hover:bg-zinc-900">
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
                    </div>
                ))}
            </CardContent>
        </Card>
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
