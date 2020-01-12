import { Component, OnInit } from '@angular/core';
import { Quote }from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote(1,'God and Nature first made us what we are, and then out of our own created genius we make ourselves what we want to be. Follow always that great law. Let the sky and God be our limit and Eternity our measurement.','"Martin Luther"'),
    new Quote(2,'Raise your word,not your Voice.It is rain that grows flowers,not thunder.','"Jhon Stone"')
  ];

  constructor() { }

  ngOnInit() {
  }

}
