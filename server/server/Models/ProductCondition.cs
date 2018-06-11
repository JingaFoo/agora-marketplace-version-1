using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class ProductCondition
    {
        [Key]
        public int ConditionId { get; set; }
        public string Condition { get; set; }
    }
}
