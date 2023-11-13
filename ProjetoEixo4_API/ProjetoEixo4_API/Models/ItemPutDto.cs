using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoEixo4_API.Models
{
    public class ItemPutDto
    {
        public int Id { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public DateTime Data { get; set; }

        [Required]
        [Column(TypeName ="decimal(18,2)")]
        public decimal Valor { get; set; }

        [Required]
        public int Quantidade { get; set; }
    }
}
