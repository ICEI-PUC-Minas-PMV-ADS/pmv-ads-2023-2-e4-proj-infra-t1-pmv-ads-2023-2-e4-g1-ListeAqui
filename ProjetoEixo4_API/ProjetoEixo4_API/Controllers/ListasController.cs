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
    public class ListasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ListasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Create(ListaDto listaDto)
        {
            var lista = new Lista
            {
                NomeDaLista = listaDto.NomeDaLista,
                Mercado = listaDto.Mercado,
                DataDaLista = listaDto.DataDaLista.GetValueOrDefault(),
                ClienteId = listaDto.ClienteId,
                Itens = listaDto.Itens?.Select(dto => new Item { Id = dto.Id }).ToList()
            };

            _context.Listas.Add(lista);
            await _context.SaveChangesAsync();

            return Ok(lista);
        }

        [HttpGet("ListasCliente/{clienteId}")]
        public async Task<ActionResult<IEnumerable<ListaCompleteDto>>> GetListasByClienteId(int clienteId)
        {
            var listas = await _context.Listas
                .Where(l => l.ClienteId == clienteId)
                .Select(l => new ListaCompleteDto
                {
                    Id = l.Id,
                    NomeDaLista = l.NomeDaLista,
                    Mercado = l.Mercado,
                    DataDaLista = l.DataDaLista,
                    Itens = l.Itens.Select(i => new ItemDto { Id = i.Id }).ToList(),
                    ClienteId = l.ClienteId
                })
                .ToListAsync();

            if (listas == null || !listas.Any())
            {
                return NotFound();
            }

            return Ok(listas);
        }

        [HttpPut("AtualizarLista/{id}")]
        public async Task<IActionResult> Update(int id, ListaPutDto listaPutDto)
        {
            if (id != listaPutDto.Id)
            {
                return BadRequest("ID da URL não corresponde ao ID do corpo da requisição.");
            }

            var lista = await _context.Listas
                .Include(l => l.Itens)
                .FirstOrDefaultAsync(l => l.Id == id);

            if (lista == null)
            {
                return NotFound();
            }

            lista.NomeDaLista = listaPutDto.NomeDaLista;
            lista.Mercado = listaPutDto.Mercado;
            lista.DataDaLista = listaPutDto.DataDaLista ?? lista.DataDaLista;

            // Aqui você pode adicionar lógica para atualizar os itens se necessário
            // Por exemplo, se você deseja substituir os itens existentes pelos novos
            // lista.Itens = ... (sua lógica para atualizar os itens)

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ListaExists(id))
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

        private bool ListaExists(int id)
        {
            return _context.Listas.Any(e => e.Id == id);
        }

        [HttpDelete("DeletarLista/{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var lista = await _context.Listas
                .Include(l => l.Itens)
                .FirstOrDefaultAsync(l => l.Id == id);

            if (lista == null)
            {
                return NotFound();
            }

            if (lista.Itens != null && lista.Itens.Any())
            {
                _context.Itens.RemoveRange(lista.Itens);
            }

            // Exclui a lista
            _context.Listas.Remove(lista);
            await _context.SaveChangesAsync();

            return NoContent(); 
        }
    }
}
