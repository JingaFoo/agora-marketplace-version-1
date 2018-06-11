using Microsoft.EntityFrameworkCore;

namespace server.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) 
            : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<ProductSubcategory> ProductSubcategories { get; set; }
        public DbSet<ProductCondition> ProductConditions { get; set; }
        public DbSet<ProductAvailability> ProductAvailabilities { get; set; }
    }
}
