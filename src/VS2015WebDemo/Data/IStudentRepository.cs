using System;
using System.Collections.Generic;
using System.Linq;
using VS2015WebDemo.Models;

namespace VS2015WebDemo.Data
{
    public interface IStudentRepository
    {
        IEnumerable<Student> GetAll();
        Student GetById(int id);
        void Insert(Student student);
        void Update(Student student);
        void Delete(int id);
    }
}