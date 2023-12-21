using System;
using System.Collections.Generic;

namespace webapi;

public partial class ExpenseFrequency
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? Days { get; set; }

    public int? Date { get; set; }

    public virtual ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}
