import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newshow-quote',
  templateUrl: './newshow-quote.component.html',
  styleUrls: ['./newshow-quote.component.css']
})
export class NewshowQuoteComponent implements OnInit {

  isDisabled=false;
  age=18;
  suggestedpolicy :string;
  constructor() { }

  ngOnInit() {
  }
showPolicy()
{
  if(this.age>30){
  this.suggestedpolicy='Jeevan Anand';
  }
else{
  this.suggestedpolicy='Jeevan Akanksha';

}
console.log('policy details');
}
changeStatus(){
  this.isDisabled=false;

}

}
