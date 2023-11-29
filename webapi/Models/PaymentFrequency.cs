using System.ComponentModel.DataAnnotations;

namespace webapi.Models
{
    public class PaymentFrequency
    {
        [Key]
        public int ID { get; set; }
        public required string Name { get; set; }
        public int Days { get; set; }
        public int Date { get; set; }
    }
}
