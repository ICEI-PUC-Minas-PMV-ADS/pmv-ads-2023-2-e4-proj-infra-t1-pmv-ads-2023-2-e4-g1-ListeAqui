using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjetoEixo4_API.Models
{
    [Table("Clientes")]
    public class Cliente 
    {
        [Key]
        public int Id { get; set; }
        [Column("Nome")]
        public string Nome { get; set; }
        [JsonIgnore]
        [Column("PassWord")]
        public string Password { get; set; }
        [Column("Email")]
        public string Email { get; set; }
        public ICollection<Lista>? Listas { get; set; }

      
    }
}
