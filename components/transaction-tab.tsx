import { TabsTrigger } from "@/components/ui/tabs";
import { TransactionBadge } from "@/components/transaction-badge";

interface Props {
    value: string;
    label: string;
    count: number;
}

export const TransactionTab = ({ value, label, count }: Props) => (
    <TabsTrigger value={value} className="flex h-full w-full items-center justify-between">
        <span>{label}</span>
        <TransactionBadge count={count} />
    </TabsTrigger>
);
