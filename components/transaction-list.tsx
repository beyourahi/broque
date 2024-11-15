import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Activity, TrendingUp, TrendingDown, ChevronRight } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
    title: "Incomes" | "Expenses";
    items: (Income | Expense)[];
}

export const TransactionList = ({ title, items }: Props) => (
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
