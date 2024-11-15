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
                : "text-xl font-semibold text-white/90 sm:text-3xl md:text-4xl"
        }`}
    >
        {formatCurrency(amount)}
    </span>
);
