import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({

  templateUrl:'/app/signup/customerSignup.component.html'
})
export class CustomerSignupComponent{
  
  constructor(private http: Http){}
data:any = {
  "name":"jghch",
  "email":"wfewf",
  "contact":"91",
  "address":"erfrew",
  "level":"good",
  "salary":"2000",
  "pass":"erfrew",
  "cPass":"jghch" 
}
// name: string = "axs";

  onSubmit() {
    console.log(this.data);

    this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
      .subscribe();
      alert("form submitted");
      //this.router.navigateByUrl('');
  }
}