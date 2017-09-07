import { NgModule }      from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent }   from '../appComponent/app.component';
import { HomeComponent }   from '../home/home.component';
import { CSSCarouselComponent} from '../imageSlide/imageSlide.component';
import { CookSignupComponent,EqualValidator } from '../signupCook/signupCook.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {  searchCookComponent } from '../searchCook/searchCook.component';
import { CustomerLoginComponent } from '../login/login.component';
import { GetCookSearchComponent } from '../searchCook/getSearchCook.component';
import { CustomerSignupComponent } from '../signupCustomer/signupCustomer.component';
const routes: Routes = [
    {path: '',component:HomeComponent },
    {path: 'signupCook',component:CookSignupComponent },
    {path: 'login',component:CustomerLoginComponent },
    {path:'cooksearchdata',component:GetCookSearchComponent},
    {path:'signupCustomer',component: CustomerSignupComponent}
   ]

@NgModule
({
  imports:
  [ RouterModule.forRoot(routes) ],
  exports:
  [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents =
[
    AppComponent, HomeComponent, CSSCarouselComponent, 
    CookSignupComponent, HeaderComponent, FooterComponent,
    searchCookComponent, CustomerLoginComponent, EqualValidator,
    GetCookSearchComponent, CustomerSignupComponent
]