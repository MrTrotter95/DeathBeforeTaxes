using DataAccessLayer.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.DomainLayer.Models;

namespace webapi.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly DbtdataContext _context;

        public HomeController(DbtdataContext context)
        {
            _context = context;
        }

        // GET: api/Home
        [HttpGet]
        public async Task<ActionResult<Home>> GetExpenseCategories()
        {
            var savingsAccount = await _context.SavingsAccounts.FirstOrDefaultAsync();
            var expenseAccount = await _context.ExpenseAccounts.FirstOrDefaultAsync();

            Home home = new Home
            {
                SavingsAccount = savingsAccount!,
                ExpenseAccount = expenseAccount!
            };

            if (home.SavingsAccount == null || home.ExpenseAccount == null)
            {
                return NotFound();
            }

            return home;
        }
    }
}
