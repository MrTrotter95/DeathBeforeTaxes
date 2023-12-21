using System;
using System.Collections.Generic;

namespace webapi;

public partial class ExpenseCategory
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Expense> Expenses { get; set; } = new List<Expense>();
}
