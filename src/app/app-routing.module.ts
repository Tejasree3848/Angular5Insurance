import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowpolicydetailsComponent } from './showpolicydetails/showpolicydetails.component';
import { ShowbranchComponent } from './showbranch/showbranch.component';
import { NewshowQuoteComponent } from './newshow-quote/newshow-quote.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { SearchbranchComponent } from './searchbranch/searchbranch.component';
import { UniversalguardGuard } from './universalguard.guard';
import { ShowHealthPolicyComponent } from './show-health-policy/show-health-policy.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'login/:msg',component:LoginComponent},
  {path:'products',component:ContentComponent},
  {path:'history',component:DetailsComponent,
  canActivate:[UniversalguardGuard],children:[
  {path:'health',component:ShowHealthPolicyComponent,outlet:'health'},
  {path:'life',component: ShowpolicydetailsComponent,outlet:'life'},
  ]},
  {path:'advisors',component:ShowAdvisorsComponent},
  {path:'quote',component:NewshowQuoteComponent},
  {path:'branches',component:SearchbranchComponent},
  {path:'logout',component:LogoutComponent,canDeactivate:[UniversalguardGuard]},
  {path:'**',redirectTo:'login'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
