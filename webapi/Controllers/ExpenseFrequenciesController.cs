using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DataAccessLayer.Context;
using webapi;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExpenseFrequenciesController : ControllerBase
    {
        private readonly DbtdataContext _context;

        public ExpenseFrequenciesController(DbtdataContext context)
        {
            _context = context;
        }

        // GET: api/ExpenseFrequencies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseFrequency>>> GetExpenseFrequencies()
        {
          if (_context.ExpenseFrequencies == null)
          {
              return NotFound();
          }
            return await _context.ExpenseFrequencies.ToListAsync();
        }

        // GET: api/ExpenseFrequencies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseFrequency>> GetExpenseFrequency(int id)
        {
          if (_context.ExpenseFrequencies == null)
          {
              return NotFound();
          }
            var expenseFrequency = await _context.ExpenseFrequencies.FindAsync(id);

            if (expenseFrequency == null)
            {
                return NotFound();
            }

            return expenseFrequency;
        }

        // PUT: api/ExpenseFrequencies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseFrequency(int id, ExpenseFrequency expenseFrequency)
        {
            if (id != expenseFrequency.Id)
            {
                return BadRequest();
            }

            _context.Entry(expenseFrequency).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseFrequencyExists(id))
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

        // POST: api/ExpenseFrequencies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExpenseFrequency>> PostExpenseFrequency(ExpenseFrequency expenseFrequency)
        {
          if (_context.ExpenseFrequencies == null)
          {
              return Problem("Entity set 'DbtdataContext.ExpenseFrequencies'  is null.");
          }
            _context.ExpenseFrequencies.Add(expenseFrequency);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExpenseFrequency", new { id = expenseFrequency.Id }, expenseFrequency);
        }

        // DELETE: api/ExpenseFrequencies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpenseFrequency(int id)
        {
            if (_context.ExpenseFrequencies == null)
            {
                return NotFound();
            }
            var expenseFrequency = await _context.ExpenseFrequencies.FindAsync(id);
            if (expenseFrequency == null)
            {
                return NotFound();
            }

            _context.ExpenseFrequencies.Remove(expenseFrequency);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExpenseFrequencyExists(int id)
        {
            return (_context.ExpenseFrequencies?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
