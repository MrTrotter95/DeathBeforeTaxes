using Microsoft.EntityFrameworkCore;
using webapi;

namespace DataAccessLayer.Context;

public partial class DbtdataContext : DbContext
{
    public DbtdataContext()
    {
    }

    public DbtdataContext(DbContextOptions<DbtdataContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Expense> Expenses { get; set; }

    public virtual DbSet<ExpenseAccount> ExpenseAccounts { get; set; }

    public virtual DbSet<ExpenseCategory> ExpenseCategories { get; set; }

    public virtual DbSet<ExpenseFrequency> ExpenseFrequencies { get; set; }

    public virtual DbSet<SavingsAccount> SavingsAccounts { get; set; }

    public virtual DbSet<SavingsGoal> SavingsGoals { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=(localdb)\\ProjectModels;Initial Catalog=DBTData;Integrated Security=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Expense>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3214EC27ABC7257E");

            entity.ToTable("Expense");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Amount).HasColumnType("decimal(8, 2)");
            entity.Property(e => e.DueDate).HasColumnType("datetime");
            entity.Property(e => e.FkExpenseAccountId).HasColumnName("FK_ExpenseAccountID");
            entity.Property(e => e.FkExpenseCategoryId).HasColumnName("FK_ExpenseCategoryID");
            entity.Property(e => e.FkExpenseFrequencyId).HasColumnName("FK_ExpenseFrequencyID");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.PaymentDate).HasColumnType("datetime");

            entity.HasOne(d => d.FkExpenseAccount).WithMany(p => p.Expenses)
                .HasForeignKey(d => d.FkExpenseAccountId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_ExpenseAccountID");

            entity.HasOne(d => d.FkExpenseCategory).WithMany(p => p.Expenses)
                .HasForeignKey(d => d.FkExpenseCategoryId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_ExpenseCategoryID");

            entity.HasOne(d => d.FkExpenseFrequency).WithMany(p => p.Expenses)
                .HasForeignKey(d => d.FkExpenseFrequencyId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_ExpenseFrequencyID");
        });

        modelBuilder.Entity<ExpenseAccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ExpenseA__3214EC2738D2C048");

            entity.ToTable("ExpenseAccount");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.TotalAmount).HasColumnType("decimal(8, 2)");
        });

        modelBuilder.Entity<ExpenseCategory>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ExpenseC__3214EC27DFF9693E");

            entity.ToTable("ExpenseCategory");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<ExpenseFrequency>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__ExpenseF__3214EC270CCF6763");

            entity.ToTable("ExpenseFrequency");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.Name).HasMaxLength(50);
        });

        modelBuilder.Entity<SavingsAccount>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__SavingsA__3214EC27B72B9942");

            entity.ToTable("SavingsAccount");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.HouseSavingsGoal).HasColumnType("decimal(8, 2)");
            entity.Property(e => e.HouseSavingsTotal).HasColumnType("decimal(8, 2)");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.TotalAmount).HasColumnType("decimal(8, 2)");
        });

        modelBuilder.Entity<SavingsGoal>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__tmp_ms_x__3214EC2754540B2E");

            entity.ToTable("SavingsGoal");

            entity.Property(e => e.Id).HasColumnName("ID");
            entity.Property(e => e.ActualBuyPrice).HasColumnType("datetime");
            entity.Property(e => e.CurrentTotal).HasColumnType("decimal(8, 2)");
            entity.Property(e => e.FkSavingsAccountId).HasColumnName("FK_SavingsAccountID");
            entity.Property(e => e.GoalAmount).HasColumnType("decimal(8, 2)");
            entity.Property(e => e.Name).HasMaxLength(50);
            entity.Property(e => e.PurchaseDate).HasColumnType("datetime");

            entity.HasOne(d => d.FkSavingsAccount).WithMany(p => p.SavingsGoals)
                .HasForeignKey(d => d.FkSavingsAccountId)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_SavingsAccountID");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
