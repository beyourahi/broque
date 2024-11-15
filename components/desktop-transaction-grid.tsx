import { TransactionList } from "@/components/transaction-list";

interface Props {
    incomes: Income[];
    expenses: Expense[];
}

export const DesktopTransactionGrid = ({ incomes, expenses }: Props) => (
    <div className="hidden md:grid md:grid-cols-2 md:gap-10">
        <TransactionList title="Incomes" items={incomes} />
        <TransactionList title="Expenses" items={expenses} />
    </div>
);
