export interface ExpenseAccountModel {
    ID: number;
    Name: string;
    TotalAmount: number | null;
}

export interface Expense {
    ID: number;
    Name: string;
    Amount: number;
    DueDate: Date | null;
    IsPaid: boolean;
    PaymentDate: Date | null;
    Recurring: boolean;
}

export interface ExpenseCategory {
    ID: number;
    Name: string;
}

export interface ExpenseFrequency {
    ID: number;
    Name: string;
    Days: number | null;
    Date: number | null;
}

export interface SavingsAccount {
    ID: number;
    Name: string;
    TotalAmount: number | null;
    HouseSavingsEnabled: boolean;
    HouseSavingsTotal: number | null;
    HouseSavingsGoal: number | null;
}

export interface SavingsGoal {
    ID: number;
    Name: string;
    CurrentTotal: number;
    GoalAmount: number;
    PurchaseDate: Date | null;
    ActualBuyPrice: Date | null;
}