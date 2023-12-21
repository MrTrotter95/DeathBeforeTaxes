using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Context;
using webapi;
using Microsoft.AspNetCore.Cors;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavingsAccountsController : ControllerBase
    {
        private readonly DbtdataContext _context;

        public SavingsAccountsController(DbtdataContext context)
        {
            _context = context;
        }

        // GET: api/SavingsAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SavingsAccount>>> GetSavingsAccounts()
        {
          if (_context.SavingsAccounts == null)
          {
              return NotFound();
          }
            return await _context.SavingsAccounts.ToListAsync();
        }

        // GET: api/SavingsAccounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SavingsAccount>> GetSavingsAccount(int id)
        {
          if (_context.SavingsAccounts == null)
          {
              return NotFound();
          }
            var savingsAccount = await _context.SavingsAccounts.FindAsync(id);

            if (savingsAccount == null)
            {
                return NotFound();
            }

            return savingsAccount;
        }

        // PUT: api/SavingsAccounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSavingsAccount(int id, SavingsAccount savingsAccount)
        {
            if (id != savingsAccount.Id)
            {
                return BadRequest();
            }

            _context.Entry(savingsAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SavingsAccountExists(id))
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

        // POST: api/SavingsAccounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SavingsAccount>> PostSavingsAccount(SavingsAccount savingsAccount)
        {
          if (_context.SavingsAccounts == null)
          {
              return Problem("Entity set 'DbtdataContext.SavingsAccounts'  is null.");
          }
            _context.SavingsAccounts.Add(savingsAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSavingsAccount", new { id = savingsAccount.Id }, savingsAccount);
        }

        // DELETE: api/SavingsAccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSavingsAccount(int id)
        {
            if (_context.SavingsAccounts == null)
            {
                return NotFound();
            }
            var savingsAccount = await _context.SavingsAccounts.FindAsync(id);
            if (savingsAccount == null)
            {
                return NotFound();
            }

            _context.SavingsAccounts.Remove(savingsAccount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SavingsAccountExists(int id)
        {
            return (_context.SavingsAccounts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
