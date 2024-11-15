import { BalanceCard } from "@/components/balance-card";

export const Balance = ({ summary }: { summary: FinancialSummary }) => (
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
