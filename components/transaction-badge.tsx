import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const TransactionBadge = ({ count }: { count: number }) => (
    <Badge
        variant="secondary"
        className="flex w-fit items-center gap-2 rounded-full text-xs md:text-sm"
    >
        <Activity className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground">{count}</span>
    </Badge>
);
