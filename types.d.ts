interface ContextData {}

interface Income {
    name: string;
    amount: number;
    type: "income";
}

interface Expense {
    name: string;
    amount: number;
    badPurchase?: boolean;
    type: "expense";
}

interface Data {
    incomes: Income[];
    expenses: Expense[];
}

interface MoneyItem {
    item: Income | Expense;
}
