using System.ComponentModel.DataAnnotations.Schema;

namespace ProjetoEixo4_API.Models
{
    [Table("ListaClientes")]
    public class ListaClientes
    {
        public int ListaId { get; set; }
        public Lista Lista { get; set; }
        public int ClienteId { get; set; }
        public Cliente Cliente { get; set; }

        //public ICollection<ListaClientes> Listas { get; set; }

        //public ICollection<ListaClientes> Clientes { get; set; }
    }
}
