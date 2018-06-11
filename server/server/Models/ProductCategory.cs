using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class ProductCategory
    {
        [Key]
        public int CategoryId { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string Icon { get; set; }
    }
}
