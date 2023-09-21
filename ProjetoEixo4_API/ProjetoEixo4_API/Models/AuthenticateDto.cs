using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoEixo4_API.Models
{
    public class AuthenticateDto
    {

        [Column("Email")]
        public string Email { get; set; }
        [Column("PassWord")]
        public string PassWord { get; set; }
    }
}
