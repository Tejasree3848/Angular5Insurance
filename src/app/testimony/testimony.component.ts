import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
  encapsulation:ViewEncapsulation.Native
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
getRetailCustomerFeedback():string{

return 'Claims processing is prompt and received the payment within 100 days';
}
getCorpCustomerFeedback():string{
 
  return 'Door devlivery expectedd';


}
detectchange():string{
 
  return 'Door devlivery expectedd';
}

}


