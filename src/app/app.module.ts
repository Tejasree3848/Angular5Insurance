import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { NewshowQuoteComponent } from './newshow-quote/newshow-quote.component';
import { MenuComponent } from './menu/menu.component';
import { SearchbranchComponent } from './searchbranch/searchbranch.component';
import { ShowbranchComponent } from './showbranch/showbranch.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HighLightDirective } from './high-light.directive';
import { AddelementDirective } from './addelement.directive';
import { ShowLocationComponent } from './show-location/show-location.component';
import { ShowpolicydetailsComponent } from './showpolicydetails/showpolicydetails.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ShowAdvisorsComponent,
    NewshowQuoteComponent,
    MenuComponent,
    SearchbranchComponent,
    ShowbranchComponent,
    TestimonyComponent,
    LoginComponent,
    LogoutComponent,
    HighLightDirective,
    AddelementDirective,
    ShowLocationComponent,
    ShowpolicydetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [HttpClient],
  entryComponents:[ShowLocationComponent],
  bootstrap: [AppComponent,FooterComponent]
})
export class AppModule { }
