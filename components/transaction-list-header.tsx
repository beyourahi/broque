import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
    title: "Incomes" | "Expenses";
    count: number;
}

export const TransactionListHeader = ({ title, count }: Props) => (
    <div className="hidden items-center justify-between md:flex">
        <h2 className="text-xl font-semibold text-white/90">{title}</h2>
        <Badge className="flex w-fit items-center gap-2 rounded-full bg-white/10 text-xs active:bg-white/10 md:text-sm xl:hover:bg-white/10">
            <Activity className="h-3.5 w-3.5 text-white/70" />
            <span className="text-xs font-medium text-white/70">{count}</span>
        </Badge>
    </div>
);
