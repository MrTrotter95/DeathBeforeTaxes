using System;
using System.Collections.Generic;

namespace webapi;

public partial class Expense
{
    public int Id { get; set; }

    public int? FkExpenseAccountId { get; set; }

    public int? FkExpenseCategoryId { get; set; }

    public int? FkExpenseFrequencyId { get; set; }

    public string Name { get; set; } = null!;

    public decimal Amount { get; set; }

    public DateTime? DueDate { get; set; }

    public bool IsPaid { get; set; }

    public DateTime? PaymentDate { get; set; }

    public bool Recurring { get; set; }

    public virtual ExpenseAccount? FkExpenseAccount { get; set; }

    public virtual ExpenseCategory? FkExpenseCategory { get; set; }

    public virtual ExpenseFrequency? FkExpenseFrequency { get; set; }
}
