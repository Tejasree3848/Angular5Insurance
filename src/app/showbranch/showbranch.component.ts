import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector:'app-showbranch',
  templateUrl: './showbranch.component.html',
  styleUrls: ['./showbranch.component.css']
})
export class ShowbranchComponent implements OnInit {
@Input() cityName:string;
@Output() branchs:EventEmitter<string[]>=new EventEmitter<string[]>();
  constructor() {

    console.log(this.cityName);
   }

  ngOnInit() {
    console.log(this.cityName);

  }
  sendBranches()
{
  if(this.cityName=='hyd'){
  this.branchs.emit(['Lingampally','JNTU','India']);
  }
  else{
    this.branchs.emit(['Gandhinagar','patelnagar','Hongkong']);

  }
}
}
