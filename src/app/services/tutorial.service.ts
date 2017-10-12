import { Injectable } from '@angular/core';

import { Tutorial } from '../models/tutorial-model';
import { TUTORIALS } from '../mock-tutorials';

@Injectable()
export class TutorialService {

  constructor() { }

  getTutorials(){
    return TUTORIALS;
  }
}
