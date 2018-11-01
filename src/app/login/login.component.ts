import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //injection the sevice class here
  constructor(private service:ComponentCommunicationService) { 

  }

  ngOnInit() {
  }
  validate(){
    this.service.changeMessage('Logged');
  }

}
