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

interface Balance extends Data {}

interface MoneyList {
    items: Income[] | Expense[];
    title: string;
}

interface MoneyItem {
    item: Income | Expense;
}
