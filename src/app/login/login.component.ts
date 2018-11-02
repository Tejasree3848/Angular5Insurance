import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;
formConfig:any=[
{type:'text',name:'userName',label:'userName',constraint:Validators.required},
{type:'password',name:'password',label:'password',constraint:Validators.required}
];
  errorMessage: any;
  //model driven form

  //injection the sevice class here
  constructor(private router:Router,private route:ActivatedRoute,private service:ComponentCommunicationService,private builder:FormBuilder) { 
  this.loginForm=this.builder.group({});
  }

  ngOnInit() {

    this.route.params.subscribe(param=>
      {
        this.errorMessage=param['msg'];
      })
    this.formConfig.forEach(element => {
      this.loginForm.addControl(element.name,new FormControl('',{validators:element.constraint}));
      
    });
  }
  validate(){
    //console.log(this.loginForm.value);
    const uname=this.loginForm.controls.userName.value;
    const pwd=this.loginForm.controls.password.value;
    if(uname==='india' && pwd==='india')
    {
    sessionStorage.setItem('logged','true');
    this.router.navigate(['products']);
    }
    else{
      this.errorMessage="Invalid";
    }

    this.service.changeMessage('logged');
  }

}
