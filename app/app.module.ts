import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'
import { AppComponent }   from './app.component';
import { HomeComponent }   from './home.component';
import { CSSCarouselComponent} from './imageSlide.component';
import { CustomerSignupComponent } from './customerSignup.component'
@NgModule({
  imports:      [ BrowserModule, HttpModule,
  RouterModule.forRoot([
    {path: '',component:HomeComponent },
    {path: 'signup',component:CustomerSignupComponent }
  ]) ],
  declarations: [ AppComponent, HomeComponent, CSSCarouselComponent, CustomerSignupComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
