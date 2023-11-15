using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace webapi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }

        //public DbSet<YourEntity> YourEntities { get; set; }
    }


}
