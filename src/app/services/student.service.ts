import { Injectable } from '@angular/core';

import { Student } from '../models/student-model';
import { STUDENTS } from '../mock-students';

@Injectable()
export class StudentService {

  constructor() { }

  getStudents():Student[]{
      return STUDENTS;
  }
}
