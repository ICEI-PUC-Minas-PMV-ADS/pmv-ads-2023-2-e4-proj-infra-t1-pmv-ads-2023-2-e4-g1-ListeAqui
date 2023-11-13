using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoEixo4_API.Models;

namespace ProjetoEixo4_API.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ClientesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> Create(ClienteDto model)
        {

            var usuarioDB = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == model.Email);

            if(usuarioDB != null)
            {
                return BadRequest(new { message = "E-mail já cadastrado!!" });
            }

            Cliente novo = new()
            {
                Nome = model.Nome,
                Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                Email = model.Email
            };

            _context.Clientes.Add(novo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = novo.Id }, novo);

        }

        [HttpGet("{id}")]
        public async Task<ActionResult> GetById(int id)
        {
            var model = await _context.Clientes
                .Include(t => t.Listas).ThenInclude(t => t.Itens)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);

        }

        //[HttpPut("{id}")]
        //public async Task<ActionResult> Update(int id, ClienteDto model)
        //{
        //    if (id != model.Id) return BadRequest();
        //    var modeloDB = await _context.Clientes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
        //    if (modeloDB == null) return NotFound();

        //    modeloDB.Nome = model.Nome;
        //    modeloDB.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
        //    modeloDB.Email = model.Email;

        //    _context.Clientes.Update(modeloDB);
        //    await _context.SaveChangesAsync();
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public async Task<ActionResult> Delete(int id)
        //{
        //    var model = await _context.Clientes.FindAsync(id);

        //    if (model == null) return NotFound();

        //    _context.Clientes.Remove(model);
        //    await _context.SaveChangesAsync();

        //    return NoContent();

        //}

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var usuarioDB = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == model.Email);

            if (usuarioDB == null || !BCrypt.Net.BCrypt.Verify(model.PassWord, usuarioDB.Password))
                return Unauthorized();

            // Retorna o ID do usuário em vez de um JWT
            return Ok(new { userId = usuarioDB.Id, usuarioDB.Nome });
        }

    }
}