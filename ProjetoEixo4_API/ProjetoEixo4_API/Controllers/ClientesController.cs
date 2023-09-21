using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjetoEixo4_API.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            var model = await _context.Clientes
              .Include(t => t.Listas).ThenInclude(t => t.Lista).ThenInclude(t => t.Itens)

              .ToListAsync();

            return Ok(model);
        }
        [HttpPost]
        public async Task<ActionResult> Create(ClienteDto model)
        {

            var usuarioDB = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == model.Email);

            if(usuarioDB != null)
            {
                return BadRequest(new { message = "E-mail já cadastrado!!" });
            }

            Cliente novo = new Cliente()
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
                .Include(t => t.Listas).ThenInclude(t => t.Lista).ThenInclude(t => t.Itens)
                .FirstOrDefaultAsync(c => c.Id == id);

            if (model == null) return NotFound();

            return Ok(model);



        }
        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, ClienteDto model)
        {
            if (id != model.Id) return BadRequest();
            var modeloDB = await _context.Clientes.AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
            if (modeloDB == null) return NotFound();

            modeloDB.Nome = model.Nome;
            modeloDB.Password = BCrypt.Net.BCrypt.HashPassword(model.Password);
            modeloDB.Email = model.Email;

            _context.Clientes.Update(modeloDB);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var model = await _context.Clientes.FindAsync(id);

            if (model == null) return NotFound();

            _context.Clientes.Remove(model);
            await _context.SaveChangesAsync();

            return NoContent();

        }

        [HttpPost("{id}/listas")]
        public async Task<ActionResult> AddListas(int id, ListaClientes model)
        {
            if (id != model.ClienteId) return BadRequest(new { message = "Id informados na URI e em clienteID são diferentes" });

            var model2 = await _context.Clientes.FindAsync(id);

            if (model2 == null) return BadRequest(new { message = "Id do cliente não existe" });

            var model3 = await _context.ListaClientes.FindAsync(model.ListaId, model.ClienteId);

            if (model3 != null) return BadRequest(new { message = "Id da Lista já cadastrado" });

            var model4 = await _context.Listas.FindAsync(model.ListaId);

            if (model3 == null && model4 == null) return BadRequest(new { message = "Id da lista não existe!!" });

            _context.ListaClientes.Add(model);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetById", new { id = model.ClienteId }, model);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {

            

            var usuarioDB = await _context.Clientes.FirstOrDefaultAsync(c => c.Email == model.Email);

         

            if (usuarioDB == null || !BCrypt.Net.BCrypt.Verify(model.PassWord, usuarioDB.Password))
                return Unauthorized();

            var jwt = GenerateJwtToken(usuarioDB);

            return Ok(new { jwtToken = jwt });
        }



        private string GenerateJwtToken(Cliente model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("bHtnQYUp6GtK81Qh1FR37R0mMNVYnF6y");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Id.ToString()),
                new Claim(ClaimTypes.Role, model.Nome.ToString()),
            });
            var tokenDescripter = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescripter);
            return tokenHandler.WriteToken(token);
        }





    }
}