import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../models/tutorial-model';
import { TutorialService } from '../services/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  tutorials:Tutorial[];

  constructor(private tutorialService:TutorialService) { }

  ngOnInit() {
    this.getTutorials();
  }

  getTutorials(){
    this.tutorials = this.tutorialService.getTutorials();
  }

}
