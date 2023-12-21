using System;
using System.Collections.Generic;

namespace webapi;

public partial class SavingsAccount
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public decimal? TotalAmount { get; set; }

    public bool HouseSavingsEnabled { get; set; }

    public decimal? HouseSavingsTotal { get; set; }

    public decimal? HouseSavingsGoal { get; set; }

    public virtual ICollection<SavingsGoal> SavingsGoals { get; set; } = new List<SavingsGoal>();
}
