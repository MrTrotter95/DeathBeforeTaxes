CREATE TABLE [dbo].[SavingsAccount] (
    [ID] INT IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    [TotalAmount] DECIMAL(8,2) NULL,
    [HouseSavingsEnabled]  BIT NOT NULL,
    [HouseSavingsTotal] DECIMAL(8,2) NULL,
    [HouseSavingsGoal] DECIMAL(8,2) NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
)
