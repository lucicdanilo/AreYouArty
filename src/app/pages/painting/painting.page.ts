import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-painting',
  templateUrl: './painting.page.html',
  styleUrls: ['./painting.page.scss'],
})
export class PaintingPage implements OnInit {

  constructor() {}


  ngOnInit() {

  }
 
  
  questions = ['When Leonardo painted Mona Lisa?', 
               'Who is painted this image?', 
               'Where Pablo Picasso was born?', 
               'What is the name of this picture?', 
               'Who is painter from this image?', 
               'Who is painted this image?',
               'What is the name of this picture?',
               'Who is painter from this image?',
               'Where Johannes Vermeer was born?',
               'When Creation of Adam is painted?'
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
