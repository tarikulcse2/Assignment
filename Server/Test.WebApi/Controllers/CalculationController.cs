using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Test.Entities.ViewModel;
using Test.Repository;

namespace Test.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CalculationController : ControllerBase
    {
        private readonly ICalculationRepository _calculationRepository;
        public CalculationController(ICalculationRepository calculationRepository)
        {
            _calculationRepository = calculationRepository;
        }
        
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            return Ok(await _calculationRepository.GetAllCalculations());
        }

        [HttpPost]
        public IActionResult Post([FromBody] UserViewModel userViewModel)
        {
            if(_calculationRepository.Add(userViewModel)){
                BigInteger fbigInteger = BigInteger.Parse(userViewModel.FirstNumber);
                BigInteger sbigInteger = BigInteger.Parse(userViewModel.SecondNumber);
                BigInteger add = BigInteger.Add(fbigInteger, fbigInteger);
                BigInteger multiply = BigInteger.Multiply(fbigInteger, fbigInteger);
                BigInteger divide = BigInteger.Divide(fbigInteger, fbigInteger);
                BigInteger greatestCommonDivisor = BigInteger.GreatestCommonDivisor(fbigInteger, fbigInteger);
                return Ok(new { add, multiply, divide, greatestCommonDivisor});
            };
            return Ok(null);
        }
    }
}
