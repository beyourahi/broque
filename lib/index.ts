export const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 2, // Ensures two decimal places
        maximumFractionDigits: 2 // Limits to two decimal places
    })
        .format(amount)
        .replace(/(\.\d*?[1-9])0+$|\.0*$/, "$1");
