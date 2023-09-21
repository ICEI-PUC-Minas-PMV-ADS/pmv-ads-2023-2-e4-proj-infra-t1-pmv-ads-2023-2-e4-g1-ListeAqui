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
    public class ListasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ListasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Listas
                 .Include(t => t.Itens)
                .ToListAsync();

            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Create(Lista model)
        {
            //if(model.ValorTotal <=0 || model.QuantidadeDeProdutos <= 0)
            //{
            //return BadRequest(new {message="Quantidade e Valor devem ser maiores do que zero!!"});
            //}

            _context.Listas.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.Id }, model);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Listas
                //.Include(t => t.Clientes).ThenInclude(t=>t.Cliente)
                .Include(t => t.Itens)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();
           //GerarLinks(model);
            return Ok(model);

        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Lista model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDB = await _context.Listas.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
            if (modeloDB == null) return NotFound();



            _context.Listas.Update(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Listas.FindAsync(id);

            if (model == null) return NotFound();

            _context.Listas.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }


        /* [HttpPost("{id}/clientes")]
         public async Task<ActionResult> AddCliente(int id,ListaClientes model )
         {
             if(id !=model.ListaId) return BadRequest();

             _context.ListaClientes.Add(model);
             await _context.SaveChangesAsync();

             return CreatedAtAction("GetById", new { id = model.ListaId }, model);
         }
         [HttpDelete("{id}/clientes/{clienteId}")]
         public async Task<ActionResult> DeleteCliente(int id, int clienteId )
         {
             var model = await _context.ListaClientes
                 .Where(c => c.ListaId == id && c.ClienteId == clienteId)
                 .FirstOrDefaultAsync();

             if(model == null) return NotFound();

             _context.ListaClientes.Remove(model);
             await _context.SaveChangesAsync();

             return NoContent();


         }*/
    }
}
