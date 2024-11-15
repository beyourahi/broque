import { TrendingUp, TrendingDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/lib/utils";

interface Props {
    item: Income | Expense;
    showSeparator: boolean;
}

export const TransactionListItem = ({ item, showSeparator }: Props) => (
    <div className="flex flex-col">
        {showSeparator && <Separator className="my-1 bg-white/10" />}
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
                </div>
            </div>
            <span
                className={`font-mono text-base font-bold tracking-tight md:text-lg ${
                    item.type === "income" ? "text-emerald-400" : "text-rose-400"
                }`}
            >
                {item.type === "income" ? "+" : "-"}
                {formatCurrency(item.amount)}
            </span>
        </div>
    </div>
);
