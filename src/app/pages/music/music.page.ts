import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  questions = ['Who wrote the opera "Rusalka"?', 
  'How many Ballades did Chopin write?', 
  'When Sydney Opera House was opened?', 
  'In which country was opera Lakmé set?', 
  'Where Beethoven was born?', 
  'Who composed opera "Carmen"?',
  'Who composed "Don Giovanni"?',
  'Where was born Richard Wagner?',
  'Who was composed The Four Seasons?',
  'Who is composer from picture?'
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
