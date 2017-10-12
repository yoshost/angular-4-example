import { Component, OnInit } from '@angular/core';

import { Student } from '../models/student-model';
import { StudentService } from '../services/student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students:Student[];

  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents():void{
    this.students = this.studentService.getStudents();
  }

}
