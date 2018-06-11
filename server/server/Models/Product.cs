using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        [StringLength(100)]
        public string Brand { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        [StringLength(10)]
        public int Price { get; set; }
        [Required]
        public string Condition { get; set; }
        [Required]
        public string Availability { get; set; }
        [Required]
        public string Category { get; set; }
        [Required]
        public string SubCategory { get; set; }
    }
}
