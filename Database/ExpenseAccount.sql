CREATE TABLE [dbo].[ExpenseAccount] (
    [ID] INT IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    [TotalAmount] DECIMAL(8,2) NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
)
