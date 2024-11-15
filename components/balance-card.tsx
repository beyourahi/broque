import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, DollarSign } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface Props {
    label: string;
    amount: number;
    trend?: "up" | "down";
    entries?: number;
    isMain?: boolean;
}

export const BalanceCard = ({ label, amount, trend, entries, isMain }: Props) => (
    <Card
        className={`group relative overflow-hidden rounded-2xl border-0 transition-all duration-500 xl:hover:-translate-y-1 xl:hover:shadow-2xl ${
            isMain
                ? "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 backdrop-blur-lg backdrop-filter before:absolute before:inset-0 before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent sm:col-span-2 xl:col-span-1"
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
                                ? "text-4xl font-bold text-white lg:text-5xl 2xl:text-6xl"
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
