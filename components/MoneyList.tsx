import { MoneyItem } from "./MoneyItem";
import { getAll } from "@vercel/edge-config";

export const MoneyList = async ({ title }: { title: string }) => {
    const { incomes, expenses }: Data = await getAll();
    const items = title === "Incomes" ? incomes : expenses;

    return (
        <div className="space-y-10 divide-y-2 divide-white/20 rounded-lg bg-white bg-opacity-10 p-6 shadow-xl">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-gray-200">{title}</h2>
                <p className="text-base font-bold text-gray-400">({items.length})</p>
            </div>

            <div className="space-y-4 pt-8">
                {items.map((item, index) => (
                    <MoneyItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};
