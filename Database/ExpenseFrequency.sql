CREATE TABLE [dbo].[ExpenseFrequency] (
    [ID] INT IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    [Days] INT NULL,
    [Date] INT NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
)
