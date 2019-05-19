import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.page.html',
  styleUrls: ['./literature.page.scss'],
})
export class LiteraturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questions = ['Who wrote the Flashman series?', 
  'What was the name of George Eliot?', 
  'Who wrote ‘Don Quixote’?', 
  'How many lines are there in a sonnet?', 
  'Who is writer from this picture?', 
  'Who wrote the 1938 novel "Rebecca"?',
  'Who authored "The Tempest"?',
  'Who is the author of \'The Farie Queene\'?',
  'Who chased Moby Dick?',
  'Who is writer from this picture?'
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
