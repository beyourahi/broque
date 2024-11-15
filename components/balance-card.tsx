import { Card, CardContent } from "@/components/ui/card";
import { BalanceCardAmount } from "@/components/balance-card-amount";
import { BalanceCardHeader } from "@/components/balance-card-header";
import { BalanceCardDollarSign } from "@/components/balance-card-dollar-sign";
import { BalanceCardTransactionBadge } from "@/components/balance-transaction-badge";
import { cn } from "@/lib/utils";

interface BalanceCardProps {
    label: string;
    amount: number;
    trend?: "up" | "down";
    entries?: number;
    isMain?: boolean;
}

interface CardContainerProps {
    isMain?: boolean;
    children: React.ReactNode;
    className?: string;
}

const gradients = {
    main: {
        card: "bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900",
        overlay: "bg-gradient-to-br from-emerald-500/30 via-emerald-500/20 to-transparent"
    },
    secondary: {
        card: "bg-gradient-to-br from-black/60 to-black/40",
        overlay: "bg-gradient-to-br from-white/10 to-transparent"
    }
};

const CardContainer = ({ isMain, children, className }: CardContainerProps) => (
    <Card
        className={cn(
            "group relative w-full overflow-hidden rounded-2xl border-0 transition-all duration-500 xl:hover:-translate-y-1 xl:hover:shadow-2xl",
            isMain
                ? `${gradients.main.card} col-span-2 backdrop-blur-lg backdrop-filter before:absolute before:inset-0 before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent xl:col-span-1`
                : `${gradients.secondary.card} xl:col-span-1`,
            className
        )}
    >
        {children}
    </Card>
);

export const BalanceCard = ({ label, amount, trend, entries, isMain }: BalanceCardProps) => (
    <CardContainer isMain={isMain}>
        <div
            className={cn(
                "absolute inset-0 w-full transition-opacity duration-300 xl:opacity-70 xl:group-hover:opacity-100",
                isMain ? gradients.main.overlay : gradients.secondary.overlay
            )}
        />

        <CardContent className="space-y-3 px-2.5 py-4 sm:p-6 xl:p-8">
            <BalanceCardHeader label={label} trend={trend} isMain={isMain} />

            <div className="flex items-end justify-between gap-2">
                <div className="space-y-2 md:space-y-3">
                    <BalanceCardAmount amount={amount} isMain={isMain} />
                    {entries !== undefined && <BalanceCardTransactionBadge entries={entries} />}
                </div>

                {isMain && <BalanceCardDollarSign />}
            </div>
        </CardContent>
    </CardContainer>
);
