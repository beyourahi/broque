import { redirect } from "next/navigation";
import Image from "next/image";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getAll } from "@vercel/edge-config";
import {
    TrendingUp,
    TrendingDown,
    Wallet2,
    LogOut,
    Activity,
    DollarSign,
    ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import bossman from "@/public/bossman.webp";

export const runtime = "edge";

// Types
interface User {
    family_name: string | null;
    given_name: string | null;
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

interface NavbarProps {
    user: User;
}

interface BalanceCardProps {
    label: string;
    amount: number;
    trend?: "up" | "down";
    entries?: number;
    isMain?: boolean;
}

interface BalanceProps {
    summary: FinancialSummary;
}

interface TransactionProps {
    title: "Incomes" | "Expenses";
    items: (Income | Expense)[];
}

const PERMITTED_USERS = [
    "beyourahi@gmail.com",
    "rahikhan360@gmail.com",
    "preetyfarihaafreen@gmail.com"
];

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

const Navbar = ({ user }: NavbarProps) => (
    <Card className="rounded-2xl border-0 bg-gradient-to-r from-zinc-900 via-black/50 to-black drop-shadow-lg backdrop-blur-2xl backdrop-filter">
        <CardContent className="flex h-auto flex-col items-center justify-between p-4 md:h-24 md:flex-row md:p-8">
            <div className="flex items-center gap-4 md:gap-5">
                <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 p-2 shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-500/10 md:p-3">
                    <Wallet2 className="h-6 w-6 text-white md:h-7 md:w-7" />
                </div>
                <div className="flex flex-col text-center md:text-left">
                    <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                        Broke AF 😭
                    </h1>
                    <span className="text-sm font-medium text-white/50">
                        Tracking my severely underpaid income and pesky expenses
                    </span>
                </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-6 md:mt-0 md:flex-row md:gap-8">
                <div className="flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full md:h-12 md:w-12">
                        <Image
                            src={user.picture || bossman}
                            alt="User avatar"
                            fill
                            className="object-cover"
                            priority={true}
                        />
                    </div>
                    <div className="hidden flex-col md:flex">
                        <span className="text-sm text-muted-foreground">
                            {user.given_name} {user.family_name}
                        </span>
                        <span className="font-medium text-white">{user.email}</span>
                    </div>
                </div>

                <LogoutLink>
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-0 bg-white/5 px-6 font-medium text-white/80 transition-all duration-300 ease-out hover:bg-red-500/20 hover:text-red-500"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sign Out</span>
                    </Button>
                </LogoutLink>
            </div>
        </CardContent>
    </Card>
);

const BalanceCard = ({ label, amount, trend, entries, isMain }: BalanceCardProps) => (
    <Card
        className={`group relative overflow-hidden rounded-3xl border-0 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
            isMain
                ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-lg backdrop-filter sm:col-span-2 xl:col-span-1"
                : "bg-gradient-to-br from-black/60 to-black/40 xl:col-span-1"
        }`}
    >
        <div
            className={`absolute inset-0 transition-opacity duration-300 xl:opacity-70 xl:group-hover:opacity-100 ${
                isMain
                    ? "bg-gradient-to-br from-emerald-500/30 via-emerald-500/20 to-transparent"
                    : "bg-gradient-to-br from-white/10 to-transparent"
            }`}
        />
        <CardContent className="p-4 sm:p-6 xl:p-8">
            <div className="flex items-center justify-between">
                <span
                    className={`text-sm font-medium ${isMain ? "text-emerald-400" : "text-muted-foreground"}`}
                >
                    {label}
                </span>
                {trend && (
                    <Badge
                        className={`flex items-center gap-1.5 rounded-full ${
                            trend === "up"
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-rose-500/20 text-rose-400"
                        }`}
                    >
                        {trend === "up" ? (
                            <TrendingUp className="h-4 w-4" />
                        ) : (
                            <TrendingDown className="h-4 w-4" />
                        )}
                    </Badge>
                )}
            </div>

            <div className="mt-4 flex items-end justify-between gap-2">
                <div className="space-y-2 md:space-y-3">
                    <span
                        className={`block font-mono ${
                            isMain
                                ? "text-5xl font-bold text-white 2xl:text-6xl"
                                : "text-3xl font-semibold text-white/90 md:text-4xl"
                        }`}
                    >
                        {formatCurrency(amount)}
                    </span>
                    {entries !== undefined && (
                        <Badge className="flex w-fit items-center gap-2 rounded-full bg-white/10 text-xs md:text-sm">
                            <Activity className="h-3.5 w-3.5 text-white/70" />
                            <span className="text-xs font-medium text-white/70">
                                {entries} transactions
                            </span>
                        </Badge>
                    )}
                </div>

                {isMain && (
                    <div className="rounded-xl bg-emerald-500/20 p-2 transition-colors duration-300 group-hover:bg-emerald-500/30 md:p-3">
                        <DollarSign className="h-6 w-6 text-emerald-400 md:h-7 md:w-7" />
                    </div>
                )}
            </div>
        </CardContent>
    </Card>
);

const Balance = ({ summary }: BalanceProps) => (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:gap-6">
        <BalanceCard label="Current Balance" amount={summary.balance} isMain />
        <BalanceCard
            label="Total Income"
            amount={summary.totalIncome}
            trend="up"
            entries={summary.incomeCount}
        />
        <BalanceCard
            label="Total Expense"
            amount={summary.totalExpense}
            trend="down"
            entries={summary.expenseCount}
        />
    </div>
);

const TransactionList = ({ title, items }: TransactionProps) => (
    <div className="space-y-5">
        <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white/90">{title}</h2>
            <Badge className="flex w-fit items-center gap-2 rounded-full bg-white/10 text-xs active:bg-white/10 md:text-sm xl:hover:bg-white/10">
                <Activity className="h-3.5 w-3.5 text-white/70" />
                <span className="text-xs font-medium text-white/70">{items.length}</span>
            </Badge>
        </div>

        <Card className="overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg">
            <CardContent className="p-2 md:p-3">
                {items.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="flex flex-col">
                        {index > 0 && <Separator className="my-1 bg-white/10" />}
                        <div className="group flex cursor-pointer items-center justify-between gap-6 rounded-xl px-2 py-4 transition-all duration-300 hover:bg-white/10 xl:px-4">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`rounded-xl p-3 ring-1 transition-colors duration-300 ${
                                        item.type === "income"
                                            ? "bg-emerald-500/20 text-emerald-400 ring-emerald-500/30 group-hover:bg-emerald-500/30"
                                            : "bg-rose-500/20 text-rose-400 ring-rose-500/30 group-hover:bg-rose-500/30"
                                    }`}
                                >
                                    {item.type === "income" ? (
                                        <TrendingUp className="h-5 w-5" />
                                    ) : (
                                        <TrendingDown className="h-5 w-5" />
                                    )}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-white/90 transition-colors group-hover:text-white md:text-base">
                                        {item.name}
                                    </span>
                                    {/* <span className="text-xs font-medium text-white/40">Today</span> */}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span
                                    className={`font-mono text-base font-bold tracking-tight md:text-lg ${
                                        item.type === "income"
                                            ? "text-emerald-400"
                                            : "text-rose-400"
                                    }`}
                                >
                                    {item.type === "income" ? "+" : "-"}
                                    {formatCurrency(item.amount)}
                                </span>
                                <ChevronRight className="h-5 w-5 text-white/20 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white/40" />
                            </div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    </div>
);

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
        <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-2 md:p-4">
            <div className="mx-auto max-w-[2000px] space-y-12">
                <Navbar user={user} />
                <Balance summary={summary} />
                <div className="grid gap-10 lg:grid-cols-2">
                    <TransactionList title="Incomes" items={data.incomes} />
                    <TransactionList title="Expenses" items={data.expenses} />
                </div>
            </div>
        </div>
    );
}
