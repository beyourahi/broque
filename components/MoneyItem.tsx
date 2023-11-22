import { formatCurrency } from "lib";

export const MoneyItem = ({ item }: MoneyItem) => (
    <div className="flex items-center justify-between rounded-lg p-4 transition-all duration-300 ease-in-out lg:hover:bg-white lg:hover:bg-opacity-10">
        <span className="text-lg font-semibold text-gray-300">{item.name}</span>
        <span
            className={`text-xl font-bold ${
                item.type === "income" ? "text-green-500" : "text-red-500"
            }`}
        >
            ৳{formatCurrency(item.amount)}
        </span>
    </div>
);
