import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-searchbranch',
  templateUrl: './searchbranch.component.html',
  styleUrls: ['./searchbranch.component.css']
})
export class SearchbranchComponent implements OnInit {
  
  srchCty:string;
  cityList:string[];
  @ViewChild('locationInfo',{read:ViewContainerRef}) viewRef:ViewContainerRef;
  constructor(private service:ComponentAdderService) { }

  ngOnInit() {
  }
  onChange(val)
 {
  this.cityList=val;
 }
 add()
 {
   this.service.setViewRef(this.viewRef);
  const comp= this.service.addComponent(ShowLocationComponent);
 const locationcomp= (<ShowLocationComponent>comp.instance);
 
 locationcomp.selectedLocation.subscribe(val=>
  {
    this.srchCty=val;
    if(val.length>0)
    {
      this.remove();
    }
 });
}
 remove(){
   this.service.remove();
 }
 }
