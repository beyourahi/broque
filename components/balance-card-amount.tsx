import { formatCurrency } from "@/lib/utils";

interface Props {
    amount: number;
    isMain?: boolean;
}

export const BalanceCardAmount = ({ amount, isMain }: Props) => (
    <span
        className={`block font-mono ${
            isMain
                ? "text-4xl font-bold text-white lg:text-5xl 2xl:text-6xl"
                : "text-3xl font-semibold text-white/90 md:text-4xl"
        }`}
    >
        {formatCurrency(amount)}
    </span>
);
