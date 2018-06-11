

using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class ProductSubcategory
    {
        [Key]
        public int SubcategoryId { get; set; }
        public int CategoryId { get; set; }
        public string Subcategory { get; set; }
    }
}
