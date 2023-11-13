using System.ComponentModel.DataAnnotations;

namespace ProjetoEixo4_API.Models
{
    public class ListaPutDto
    {
        public int Id { get; set; }

        [Required]
        public string NomeDaLista { get; set; }
        [Required]
        public string Mercado { get; set; }
        public DateTime? DataDaLista { get; set; }
    }
}
