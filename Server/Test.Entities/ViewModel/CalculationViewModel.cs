using System;
using System.Numerics;

namespace Test.Entities.ViewModel
{
    public class CalculationViewModel
    {
        public string UserName { get; set; }
        public string FirstNumber { get; set; }
        public string SecondNumber { get; set; }
        public DateTime DateOfCalculation { get; set; }
        public string Total { get; set; }
    }
}