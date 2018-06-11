using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class ProductAvailability
    {
        [Key]
        public int AvailabilityId { get; set; }
        public string Availability { get; set; }
    }
}
