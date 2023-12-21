using System;
using System.Collections.Generic;

namespace webapi;

public partial class ExpenseAccount
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public decimal? TotalAmount { get; set; }

    public virtual ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}
