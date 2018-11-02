import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclecomponent',
  templateUrl: './lifecyclecomponent.component.html',
  styleUrls: ['./lifecyclecomponent.component.css']
})
export class LifecyclecomponentComponent implements OnInit {

  user='';
  constructor() {

    console.log('Inside constructor')
   }

  ngOnInit() {
    console.log('Inside ngOnInit')

  }

}
