import { Component, OnInit } from '@angular/core';
import { Quote }from'../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
   new Quote(1,'God and Nature first made us what we are, and then out of our own created genius we make ourselves what we want to be. Follow always that great law. Let the sky and God be our limit and Eternity our measurement.','"Martin Luther"', new Date(2019, 3, 14)),
    new Quote(2,'Raise your word,not your Voice.It is rain that grows flowers,not thunder.','"Jhon Stone"', new Date(2020, 1, 7))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure want to delete this quote by ${this.quotes[index].description}?`)

      if (toDelete) {this.quotes.splice(index, 1) }
    }
  }

  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
