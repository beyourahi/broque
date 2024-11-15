import { Badge } from "@/components/ui/badge";
import { Activity } from "lucide-react";

export const BalanceCardTransactionBadge = ({ entries }: { entries: number }) => (
    <Badge className="flex w-fit items-center gap-2 rounded-full bg-white/10 text-xs md:text-sm">
        <Activity className="h-3.5 w-3.5 text-white/70" />
        <span className="text-[10px] font-medium text-white/70 sm:text-xs">
            {entries} transactions
        </span>
    </Badge>
);
