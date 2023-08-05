using Microsoft.EntityFrameworkCore;
using oil_exchange_backend.Models;

namespace oil_exchange_backend.Context
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<RegisterUser> Users { get; set; }
        public DbSet<CustomerManagement> Customermanagement { get; set; }
        public DbSet<StoreManagement> Store { get; set; }
        public DbSet<Promoted> Promotedusers { get; set; }
    }
}
