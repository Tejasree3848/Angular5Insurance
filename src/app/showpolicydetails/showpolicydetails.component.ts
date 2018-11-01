import { Component, OnInit } from '@angular/core';
import { PolicyDetailsPipe } from '../policy-details-pipe';
import { InsuranceAPIService } from '../insurance-api.service';

@Component({
  selector: 'app-showpolicydetails',
  templateUrl: './showpolicydetails.component.html',
  styleUrls: ['./showpolicydetails.component.css']
})
export class ShowpolicydetailsComponent implements OnInit {
  //becareful with emptyspace
  srchName='';

  policyList:PolicyDetailsPipe[];
  constructor(private service:InsuranceAPIService) { }

  ngOnInit() {
    this.service.findpolicy().subscribe(data=>this.policyList=data);
  }

}
