import { Component, OnInit, ViewChild } from '@angular/core';
import { PolicyDetailsPipe } from '../policy-details-pipe';
import { InsuranceAPIService } from '../insurance-api.service';
import { InsuranceAdvisor } from '../insurance-advisor';

@Component({
  selector: 'app-showpolicydetails',
  templateUrl: './showpolicydetails.component.html',
  styleUrls: ['./showpolicydetails.component.css']
})
export class ShowpolicydetailsComponent implements OnInit {
  //becareful with emptyspacenpm
  srchName='';
  idxposition=0;

page=0;
  //For the forms to update it in json
  policyData:PolicyDetailsPipe={
    id:0,
    policyHolderName:'',
    policyAmount:0, 
       
    maturity:new Date(),

  }
buttonText='Add';

  policyList:PolicyDetailsPipe[];
  showDown=false;
  showUp= true;
  toggleForm=false;

  constructor(private service:InsuranceAPIService) { }
@ViewChild('f') form:any;
  ngOnInit() {
    this.service.findpolicy().subscribe(data=>this.policyList=data);
  }

  submit()
  {
    if(this.buttonText==='Add'){
    this.service.addPolicy(this.policyData).subscribe(resp=>{
      this.policyList.push(resp);
      this.form.reset();
    });
  }
  else{
    this.service.updatePolicy(this.policyData).subscribe(resp=>
      {
        this.policyList[this.idxposition]=resp;
        this.form.reset();
      });
    }
  }
  //updating the policy
 update(policy)
 {
  this.idxposition=this.policyList.indexOf(policy);
  this.buttonText='Update';
  this.policyData=policy;

console.log('update called');
if(!this.toggleForm)
{
this.showForm;
}
 }
 remove(policy)
 {
   const idxposition=this.policyList.indexOf(policy);
   this.service.removePolicy(policy).subscribe(resp=>{
   this.policyList.splice(idxposition,1);
   });
 }

 showForm()
 {
this.toggleForm=!this.toggleForm;
this.showUp=!this.showUp;
this.showDown=!this.showDown;


 }


}
