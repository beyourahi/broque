import { Card, CardContent } from "@/components/ui/card";
import { TransactionListHeader } from "@/components/transaction-list-header";
import { TransactionListItem } from "@/components/transaction-list-item";

interface Props {
    title: "Incomes" | "Expenses";
    items: (Income | Expense)[];
}

export const TransactionList = ({ title, items }: Props) => (
    <div className="space-y-5">
        <TransactionListHeader title={title} count={items.length} />

        <Card className="overflow-hidden rounded-xl border-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg">
            <CardContent className="p-0 sm:p-2 md:p-3">
                {items.map((item, index) => (
                    <TransactionListItem
                        key={`${item.name}-${index}`}
                        item={item}
                        showSeparator={index > 0}
                    />
                ))}
            </CardContent>
        </Card>
    </div>
);
