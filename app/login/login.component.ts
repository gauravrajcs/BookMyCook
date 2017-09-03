import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({

  templateUrl:'/app/login/login.component.html'
})
export class CustomerLoginComponent{
  data:any = {
  "email":"",
  "pass":"",
  }
  // constructor(private http: Http){}

  onSubmit() {
  console.log();

  //   this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
  //     .subscribe();
  //     alert("form submitted");
  //     //this.router.navigateByUrl('');
  }
}