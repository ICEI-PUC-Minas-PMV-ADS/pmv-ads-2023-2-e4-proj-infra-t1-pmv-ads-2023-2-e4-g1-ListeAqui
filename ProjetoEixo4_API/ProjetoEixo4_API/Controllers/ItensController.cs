using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoEixo4_API.Models;

namespace ProjetoEixo4_API.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ItensController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ItensController(AppDbContext context)
        {
            _context = context;
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

        [HttpGet("ItensDaLista/{listaId}")]
        public async Task<ActionResult<IEnumerable<Item>>> GetItensByListaId(int listaId)
        {
            var itens = await _context.Itens
                .Where(i => i.ListaId == listaId)
                .Select(i => new Item
                {
                    Id = i.Id,
                    Descricao = i.Descricao,
                    Data = i.Data,
                    Valor = i.Valor,
                    Quantidade = i.Quantidade,
                    ListaId = i.ListaId
                })
                .ToListAsync();

            if (itens == null || !itens.Any())
            {
                return NotFound();
            }

            return Ok(itens);
        }

        [HttpPut("AtualizarItems/{id}")]
        public async Task<ActionResult> Update(int id, ItemPutDto itemPutDto)
        {
            if (id != itemPutDto.Id)
            {
                return BadRequest("ID da URL não corresponde ao ID do corpo da requisição.");
            }

            var item = await _context.Itens.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Descricao = itemPutDto.Descricao;
            item.Data = itemPutDto.Data;
            item.Valor = itemPutDto.Valor;
            item.Quantidade = itemPutDto.Quantidade;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Itens.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Retorna um status 204 (No Content) após a atualização bem-sucedida
        }

        [HttpDelete("DeletarItems/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var item = await _context.Itens.FindAsync(id);

            if (item == null)
            {
                return NotFound();
            }

            _context.Itens.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
