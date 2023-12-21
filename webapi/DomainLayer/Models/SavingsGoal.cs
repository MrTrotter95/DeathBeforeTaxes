using System;
using System.Collections.Generic;

namespace webapi;

public partial class SavingsGoal
{
    public int Id { get; set; }

    public int? FkSavingsAccountId { get; set; }

    public string Name { get; set; } = null!;

    public decimal CurrentTotal { get; set; }

    public decimal GoalAmount { get; set; }

    public DateTime? PurchaseDate { get; set; }

    public DateTime? ActualBuyPrice { get; set; }

    public virtual SavingsAccount? FkSavingsAccount { get; set; }
}
