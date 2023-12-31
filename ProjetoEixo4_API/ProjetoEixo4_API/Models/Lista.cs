﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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

        //public int ValorTotal { get; set; }

        [Required]
        public DateTime DataDaLista { get; set; }

        public ICollection<Item>? Itens { get; set; }
        public int ClienteId { get; set; }

        [JsonIgnore]
        public Cliente Cliente { get; set; }
    }
}
