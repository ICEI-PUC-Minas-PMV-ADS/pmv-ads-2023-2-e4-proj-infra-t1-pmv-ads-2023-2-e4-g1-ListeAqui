using Microsoft.EntityFrameworkCore;

namespace ProjetoEixo4_API.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<ListaClientes>()
                .HasKey(c => new { c.ListaId, c.ClienteId });

            builder.Entity<ListaClientes>()
                .HasOne(c => c.Lista).WithMany(c => c.Clientes)
                .HasForeignKey(c => c.ListaId);

            builder.Entity<ListaClientes>()
               .HasOne(c => c.Cliente).WithMany(c => c.Listas)
               .HasForeignKey(c => c.ClienteId);
        }

        public DbSet<Lista> Listas { get; set; }

        public DbSet<Item> Itens { get; set; }

        public DbSet<Cliente> Clientes { get; set; }

        public DbSet<ListaClientes> ListaClientes { get; set; }
    }
}
