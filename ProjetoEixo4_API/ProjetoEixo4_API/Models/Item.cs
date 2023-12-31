﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjetoEixo4_API.Models
{
    [Table("Itens")]
    public class Item
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Descricao { get; set; }

        [Required]
        public DateTime? Data { get; set; }

        [Required]
        [Column(TypeName ="decimal(18,2)")]
        public decimal Valor { get; set; }

        [Required]
        public int Quantidade { get; set; }

        [Required]
        public int ListaId { get; set; }

        [JsonIgnore]
        public Lista Lista { get; set; }

    }
}
