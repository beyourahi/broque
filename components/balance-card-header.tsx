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
                "text-sm font-medium",
                isMain ? "text-emerald-400" : "text-muted-foreground"
            )}
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
);
