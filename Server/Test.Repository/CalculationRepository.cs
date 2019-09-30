using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Test.Entities.DBContext;
using Test.Entities.Models;
using Test.Entities.ViewModel;

namespace Test.Repository
{
    public interface ICalculationRepository
    {
        Task<IEnumerable<CalculationViewModel>> GetAllCalculations();
        bool Add(UserViewModel userViewModel);
    }
    public class CalculationRepository : ICalculationRepository
    {
        private readonly TestDBContext _db;
        public CalculationRepository(TestDBContext db)
        {
            _db = db;
        }

        bool ICalculationRepository.Add(UserViewModel userViewModel)
        {

            User user = _db.Users.FirstOrDefault(s => 
                                s.UserName.ToLower() == 
                                userViewModel.UserName.ToLower()
                                ) ?? new User();

            if (user.Id == 0)
            {
                user = new User { UserName = userViewModel.UserName.ToLower() };
                _db.Users.Add(user);
            }

            BigInteger fbigInteger = BigInteger.Parse(userViewModel.FirstNumber);
            BigInteger sbigInteger = BigInteger.Parse(userViewModel.SecondNumber);
            user.Calculations = new List<Calculation> { new Calculation {
                FirstNumber = fbigInteger.ToString(),
                SecondNumber = sbigInteger.ToString(),
                DateOfCalculation = DateTime.Now,
            }};

            _db.Calculations.AddRange(user.Calculations);

            return _db.SaveChanges() > 0;
        }

        async Task<IEnumerable<CalculationViewModel>> ICalculationRepository.GetAllCalculations()
        {
            return await (from u in _db.Users
                            join c in _db.Calculations
                            on u.Id equals c.UserId
                            select new CalculationViewModel {
                                UserName = u.UserName,
                                FirstNumber = c.FirstNumber,
                                SecondNumber = c.SecondNumber,
                                DateOfCalculation = c.DateOfCalculation,
                                Total = (BigInteger.Parse(c.FirstNumber) + BigInteger.Parse(c.SecondNumber)).ToString()
                            }).ToListAsync();
        }
    }
}