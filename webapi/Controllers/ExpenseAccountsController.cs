using DataAccessLayer.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseAccountsController : ControllerBase
    {
        private readonly DbtdataContext _context;

        public ExpenseAccountsController(DbtdataContext context)
        {
            _context = context;
        }

        // GET: api/ExpenseAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseAccount>>> GetExpenseAccounts()
        {
          if (_context.ExpenseAccounts == null)
          {
              return NotFound();
          }

            IEnumerable<ExpenseAccount> expenseAccounts = await _context.ExpenseAccounts.ToListAsync();

            return Ok(expenseAccounts);
        }

        // GET: api/ExpenseAccounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseAccount>> GetExpenseAccount(int id)
        {
          if (_context.ExpenseAccounts == null)
          {
              return NotFound();
          }
            var expenseAccount = await _context.ExpenseAccounts.FindAsync(id);

            if (expenseAccount == null)
            {
                return NotFound();
            }

            return expenseAccount;
        }

        // PUT: api/ExpenseAccounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseAccount(int id, ExpenseAccount expenseAccount)
        {
            if (id != expenseAccount.Id)
            {
                return BadRequest();
            }

            _context.Entry(expenseAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExpenseAccounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExpenseAccount>> PostExpenseAccount(ExpenseAccount expenseAccount)
        {
          if (_context.ExpenseAccounts == null)
          {
              return Problem("Entity set 'DbtdataContext.ExpenseAccounts'  is null.");
          }
            _context.ExpenseAccounts.Add(expenseAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExpenseAccount", new { id = expenseAccount.Id }, expenseAccount);
        }

        // DELETE: api/ExpenseAccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpenseAccount(int id)
        {
            if (_context.ExpenseAccounts == null)
            {
                return NotFound();
            }
            var expenseAccount = await _context.ExpenseAccounts.FindAsync(id);
            if (expenseAccount == null)
            {
                return NotFound();
            }

            _context.ExpenseAccounts.Remove(expenseAccount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExpenseAccountExists(int id)
        {
            return (_context.ExpenseAccounts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
