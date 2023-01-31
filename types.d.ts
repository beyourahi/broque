interface ReactChildren {
    children: React.ReactNode;
}

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
