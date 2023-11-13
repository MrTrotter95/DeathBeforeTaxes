CREATE TABLE [dbo].[SavingsGoal] (
    [ID] INT IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    [CurrentTotal] DECIMAL(8, 2) NOT NULL,
    [GoalAmount] DECIMAL(8, 2) NOT NULL,
    [PurchaseDate] DATETIME NULL,
    [ActualBuyPrice] DATETIME NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_SavingsAccountID] FOREIGN KEY ([ID]) 
        REFERENCES [dbo].[SavingsAccount] ([ID]) ON DELETE CASCADE,
)