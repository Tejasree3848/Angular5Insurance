import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import {Policydetails} from '../policydetails';
import { TestimonyComponent } from '../testimony/testimony.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,AfterViewInit {

@ViewChildren('#section1') sectionList: QueryList<any>;

@ViewChild(TestimonyComponent) compRef:TestimonyComponent;

  insurancepackage:Policydetails[]=[{policyText:'JeevanBHeema',policyDescription:'CMLplan'},
     {policyText:'IIHL policy',policyDescription:'Bonus tx'},
     {policyText:'LifeInsurance',policyDescription:'lifetime'}
];
  feedback1: string;
  feedback2: string;
  constructor(private ref:ChangeDetectorRef) { }

  ngOnInit() {
  }
ngAfterViewInit():void{

this.feedback1=this.compRef.getCorpCustomerFeedback();
this.feedback2=this.compRef.getRetailCustomerFeedback();
this.ref.detectChanges();


this.sectionList.forEach(eachcomponent=>console.log(eachcomponent.links));
}

}
