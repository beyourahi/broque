import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const log = (caption: string, message: unknown) => {
    if (typeof message === "object") message = JSON.stringify(message, null, 4);
    return console.log(`\n\u001b[1;31m LOG ===>\u001b[1;32m ${caption}: ${message}\n`);
};

export const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2, // Ensures two decimal places
        maximumFractionDigits: 2 // Limits to two decimal places
    })
        .format(amount)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
