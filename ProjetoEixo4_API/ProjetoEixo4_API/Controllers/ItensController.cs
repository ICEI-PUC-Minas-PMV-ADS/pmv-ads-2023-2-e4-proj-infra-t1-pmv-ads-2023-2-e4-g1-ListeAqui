using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoEixo4_API.Models;

namespace ProjetoEixo4_API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ItensController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ItensController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Itens.ToListAsync();
            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Create(Item model)
        {
            if (model.Quantidade <= 0 || model.Valor <= 0)
            {
                return BadRequest(new { message = "Quantidade e Valor devem ser maiores do que zero!!" });
            }

            _context.Itens.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Itens.FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();
            GerarLinks(model);
            return Ok(model);

        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Item model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDB = await _context.Itens.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
            if (modeloDB == null) return NotFound();



            _context.Itens.Update(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Itens.FindAsync(id);

            if (model == null) return NotFound();

            _context.Itens.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }
        private void GerarLinks(Item model)
        {
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "self", metodo: "GET"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "update", metodo: "PUT"));
            model.Links.Add(new LinkDto(model.Id, Url.ActionLink(), rel: "delete", metodo: "Delete"));
        }
    }
}
