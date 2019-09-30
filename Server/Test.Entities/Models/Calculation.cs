using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace Test.Entities.Models
{
    [Table("Calculations")]
    public class Calculation
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string FirstNumber { get; set; }
        public string SecondNumber { get; set; }
        public DateTime DateOfCalculation { get; set; }
    
        [ForeignKey(nameof(UserId))]
        public virtual User User {get; set;}

        [NotMapped]
        public BigInteger Total => BigInteger.Parse(FirstNumber) + BigInteger.Parse(SecondNumber);
    }
}