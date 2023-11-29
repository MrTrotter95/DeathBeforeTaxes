using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore.Update.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Models
{
    public class Expense
    {
        [Key]
        public int ID { get; set; }
        public int FK_AccountID { get; set; }
        public int FK_ExpenseCategoryID { get; set; }
        public int FK_FrequencyID { get; set; }
        
        [Required]
        public required string Name { get; set; }
        
        [Column(TypeName = "decimal(8, 2)")]
        [Required]
        public decimal Amount { get; set; }
        
        [Required]
        public DateTime DueDate { get; set;}
        
        [Required]
        public bool IsPaid { get; set; }
        
        [Required]
        public DateTime PaymentDate { get; set; }
        
        [Required]
        public bool Reccuring { get; set; }


        [ForeignKey("FK_AccountID")]
        public virtual required ExpenseAccount ExpenseAccount { get; set; }
        
        [ForeignKey("FK_ExpenseCategoryID")]
        public virtual required ExpenseCategory ExpenseCategory { get; set; }
        
        [ForeignKey("FK_FrequencyID")]
        public virtual required PaymentFrequency Frequency { get; set; }
    }
}
