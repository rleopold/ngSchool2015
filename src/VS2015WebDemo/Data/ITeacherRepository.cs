using System;
using System.Collections.Generic;
using VS2015WebDemo.Models;

namespace VS2015WebDemo.Data
{
    public interface ITeacherRepository
    {
        IEnumerable<Teacher> GetAll();
        Teacher GetById(int id);
        void Insert(Teacher teacher);
        void Update(Teacher teacher);
        void Delete(int id);
    }
}