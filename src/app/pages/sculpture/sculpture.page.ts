import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculpture',
  templateUrl: './sculpture.page.html',
  styleUrls: ['./sculpture.page.scss'],
})
export class SculpturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions = ['In which city is statue of David?', 
  'What is the name of this statue?', 
  'Who sculpted the Pieta?', 
  'When was Statue of Liberty dedicated?', 
  'What is the name of this statue?', 
  'Who is sculptor of this statue?',
  'What is the name of this statue?',
  'Who sculpted Neptune and Triton?',
  'To which movement this belongs to?',
  'Who is sculptor of this statue?'
  ];


question1 = this.questions[0];
question2 = this.questions[1];
question3 = this.questions[2];
question4 = this.questions[3];
question5 = this.questions[4];
question6 = this.questions[5];
question7 = this.questions[6];
question8 = this.questions[7];
question9 = this.questions[8];
question10 = this.questions[9];


}
