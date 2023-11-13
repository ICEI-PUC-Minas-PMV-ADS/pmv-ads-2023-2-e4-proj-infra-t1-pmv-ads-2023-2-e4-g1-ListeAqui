using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoEixo4_API.Models
{
    public class ListaDto
    {
        [Required]
        public string NomeDaLista { get; set; }
        [Required]
        public string Mercado { get; set; }
        [Required]
        public DateTime? DataDaLista { get; set; }
        public ICollection<ItemDto>? Itens { get; set; }
        public int ClienteId { get; set; }
    }
}
