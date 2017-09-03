import { NgModule }      from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent }   from '../appComponent/app.component';
import { HomeComponent }   from '../home/home.component';
import { CSSCarouselComponent} from '../imageSlide/imageSlide.component';
import { CustomerSignupComponent,EqualValidator } from '../signup/customerSignup.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {  searchCookComponent } from '../searchCook/searchCook.component';
import { CustomerLoginComponent } from '../login/login.component';
const routes: Routes = [
    {path: '',component:HomeComponent },
    {path: 'signup',component:CustomerSignupComponent },
    {path: 'login',component:CustomerLoginComponent }
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
    CustomerSignupComponent, HeaderComponent, FooterComponent,
    searchCookComponent, CustomerLoginComponent, EqualValidator
]