import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PolicyDetailsPipe } from './policy-details-pipe';
import { Policydetails } from './policydetails';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  header=new HttpHeaders().set('content-type','application/json');
  baseURL='http://localhost:3000/';

  lifeInsuranceURL=this.baseURL+'lifeInsurance';

  healthInsuranceURL=this.baseURL+'history';

  constructor(private http:HttpClient) { }

  findAllAdvisors():Observable<InsuranceAdvisor[]>{
  const adviseURL=this.baseURL+'advisors';
    return this.http.get<InsuranceAdvisor[]>(adviseURL);

  }
   //findAllAdvisorsAsPromise():Promise<InsuranceAdvisor[]>{
   // const adviseURL=this.baseURL+'advisors';
    //console.log(adviseURL); 
     //   return this.service.get<InsuranceAdvisor[]>(adviseURL);
    
    

     
//  }
//Health policy
findAllHealthpolicy():Observable<PolicyDetailsPipe[]>{
  const policyURL=this.baseURL+'healthInsuranceURL';
    return this.http.get<PolicyDetailsPipe[]>(policyURL);

  }
  //
findpolicy():Observable<PolicyDetailsPipe[]>{
  const policyURL=this.baseURL+'lifeInsurance';
    return this.http.get<PolicyDetailsPipe[]>(policyURL);

  }
//Add operation
  addPolicy(policy:PolicyDetailsPipe):Observable<PolicyDetailsPipe>{

  
    return this.http.post<PolicyDetailsPipe>(this.lifeInsuranceURL,policy,{headers:this.header})
  }

  //remove/delete operation
  removePolicy(policy:PolicyDetailsPipe):Observable<PolicyDetailsPipe>{

    const deleteURL=`${this.lifeInsuranceURL}/${policy.id}`;

    return this.http.delete<PolicyDetailsPipe>(deleteURL,{headers:this.header})
  }
//update
updatePolicy(policy:PolicyDetailsPipe):Observable<PolicyDetailsPipe>{

  const updateURL=`${this.lifeInsuranceURL}/${policy.id}`;

  return this.http.put<PolicyDetailsPipe>(updateURL,policy,{headers:this.header})
}
}
