using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoEixo4_API.Models
{
    [Table("Listas")]
    public class Lista 
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string NomeDaLista { get; set; }
        [Required]
        public string Mercado { get; set; }
        //preciso da propriedade quantidadedeprodutos??
        //[Required]
        //public int QuantidadeDeProdutos { get; set; }
        //preciso da propriedade valortotal??
        //[Required]
        //public int ValorTotal { get; set; }
        [Required]
        public DateTime DataDaLista { get; set; }

        public ICollection<Item> Itens { get; set; }
        public ICollection<ListaClientes> Clientes { get; set; }
    }
}
