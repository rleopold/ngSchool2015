﻿using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using VS2015WebDemo.Models;
using VS2015WebDemo.Data;
using System.Net;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace VS2015WebDemo.Controllers.Controllers
{
    [Route("api/[controller]")]
    public class StudentsController : Controller
    {
        private IStudentRepository _students;

        public StudentsController(IStudentRepository students)
        {
            _students = students;
        }

        [HttpGet]
        public IActionResult Get()
        {
             var students = _students.GetAll();
            return Json(students);
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            var student =  _students.GetById(id);
            if (student == null)
                return HttpNotFound();

            return Json(student);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Student value)
        {
            _students.Insert(value);
            return Json(value);
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody]Student value)
        {
            value.Id = id;
            _students.Update(value);
            return new HttpStatusCodeResult(200);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            _students.Delete(id);

            return new HttpStatusCodeResult(200);
        }
    }
}
