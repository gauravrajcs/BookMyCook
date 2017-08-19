import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent }   from '../appComponent/app.component';
import { routingComponents } from '../routing/app-routing.module';
@NgModule({
  imports:      [ BrowserModule,FormsModule ,HttpModule,AppRoutingModule ],
  declarations: [ AppComponent, routingComponents ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
