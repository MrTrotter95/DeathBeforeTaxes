CREATE TABLE [dbo].[Expense] (
    [ID] INT IDENTITY (1, 1) NOT NULL,
    [FK_ExpenseAccountID] INT NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    [Amount] DECIMAL(8, 2) NOT NULL,
    [DueDate] DATETIME NULL,
    [IsPaid] BIT NOT NULL,
    [PaymentDate] DATETIME NULL,
    [Recurring] BIT NOT NULL,
    
    PRIMARY KEY CLUSTERED ([ID] ASC),

    CONSTRAINT [FK_ExpenseAccountID] FOREIGN KEY ([FK_ExpenseAccountID]) 
        REFERENCES [dbo].[ExpenseAccount] ([ID]) ON DELETE CASCADE,
    CONSTRAINT [FK_ExpenseCategoryID] FOREIGN KEY ([ID]) 
        REFERENCES [dbo].[ExpenseCategory] ([ID]) ON DELETE CASCADE,
    CONSTRAINT [FK_ExpenseFrequencyID] FOREIGN KEY ([ID])
        REFERENCES [dbo].[ExpenseFrequency] ([ID]) ON DELETE CASCADE,
)