import { Component, OnInit,Input, OnChanges,SimpleChanges } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit,OnChanges {
 @Input() name: string;

  constructor() { 

    alert('child constructor called');
    alert('input property in constructor'+this.name);

  }

  ngOnInit() {
    alert('child constructor called');
    alert('input property in constructor'+this.name);
  }
  ngOnChanges(change : SimpleChanges) {

console.log(change.name.currentValue);
console.log(change.name.previousValue);

}

}
  


