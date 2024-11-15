import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
    label: string;
    trend?: "up" | "down";
    isMain?: boolean;
}

export const BalanceCardHeader = ({ label, trend, isMain }: Props) => (
    <div className="flex items-center justify-between">
        <span
            className={cn(
                "text-xs font-medium sm:text-sm",
                isMain ? "text-emerald-400" : "text-muted-foreground"
            )}
        >
            {label}
        </span>

        {trend && (
            <Badge
                className={`flex items-center rounded-full px-1.5 ${
                    trend === "up"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-rose-500/20 text-rose-400"
                }`}
            >
                {trend === "up" ? (
                    <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                    <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
            </Badge>
        )}
    </div>
);
