using System;
using System.Collections.Generic;
using VS2015WebDemo.Models;

namespace VS2015WebDemo.Data
{
    public interface IClassRepository
    {
        IEnumerable<Class> GetAll();
        Class GetById(int id);
        void Insert(Class @class);
        void Update(Class @class);
        void Delete(int id);
    }
}