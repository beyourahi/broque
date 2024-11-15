import { Tabs, TabsList, TabsContent } from "@/components/ui/tabs";
import { TransactionTab } from "@/components/transaction-tab";
import { TransactionList } from "@/components/transaction-list";

interface Props {
    incomes: Income[];
    expenses: Expense[];
}

export const MobileTransactionTabs = ({ incomes, expenses }: Props) => (
    <div className="md:hidden">
        <Tabs defaultValue="incomes" className="w-full">
            <TabsList className="h-12 w-full">
                <TransactionTab value="incomes" label="Incomes" count={incomes.length} />
                <TransactionTab value="expenses" label="Expenses" count={expenses.length} />
            </TabsList>

            <TabsContent value="incomes" className="mt-6">
                <TransactionList title="Incomes" items={incomes} />
            </TabsContent>

            <TabsContent value="expenses" className="mt-6">
                <TransactionList title="Expenses" items={expenses} />
            </TabsContent>
        </Tabs>
    </div>
);
