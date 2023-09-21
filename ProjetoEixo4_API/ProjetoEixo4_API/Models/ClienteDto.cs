using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProjetoEixo4_API.Models
{
    public class ClienteDto
    {
        public int? Id { get; set; }
        [Required]
        public string Nome { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }

    }
}
