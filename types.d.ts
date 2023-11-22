interface Income {
    name: string;
    amount: string;
}

interface Expense {
    name: string;
    amount: string;
    badPurchase?: boolean;
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
