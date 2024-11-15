import { BalanceCard } from "@/components/balance-card";

export const Balance = ({ summary }: { summary: FinancialSummary }) => (
    <div className="grid grid-cols-2 gap-4 xl:grid-cols-3 2xl:gap-6">
        <BalanceCard label="Current Balance" amount={summary.balance} isMain />
        <BalanceCard
            label="Lifetime Income"
            amount={summary.totalIncome}
            trend="up"
            entries={summary.incomeCount}
        />
        <BalanceCard
            label="Lifetime Expense"
            amount={summary.totalExpense}
            trend="down"
            entries={summary.expenseCount}
        />
    </div>
);
