using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace ProjetoEixo4_API.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            builder.Entity<Lista>()
            .HasOne(l => l.Cliente) // Cada Lista tem um Cliente
            .WithMany(c => c.Listas) // Cada Cliente tem muitas Listas
            .OnDelete(DeleteBehavior.Cascade) // Comportamento de exclusão em cascata
            .HasForeignKey(l => l.ClienteId); // Chave estrangeira em Lista que aponta para Cliente

            builder.Entity<Cliente>()
            .HasMany(c => c.Listas) // Cada Cliente tem muitas Listas
            .WithOne(l => l.Cliente); 

            builder.Entity<Item>()
            .HasOne(i => i.Lista) // Cada Item está associado a uma Lista
            .WithMany(l => l.Itens) // Uma Lista pode ter muitos Itens
            .HasForeignKey(i => i.ListaId); // Chave estrangeira em Item que aponta para Lista

        }

        public DbSet<Lista> Listas { get; set; }

        public DbSet<Item> Itens { get; set; }

        public DbSet<Cliente> Clientes { get; set; }

    }
}
