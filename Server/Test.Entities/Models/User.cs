using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Test.Entities.Models
{
    [Table("Users")]
    public class User
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public virtual IList<Calculation> Calculations { get; set;}
    }
}