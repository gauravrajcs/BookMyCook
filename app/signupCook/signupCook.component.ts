import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS,Validator,
         Validators,AbstractControl,ValidatorFn } from '@angular/forms';


@Component({

  templateUrl:'/app/signupCook/signupCook.component.html'
  
})

export class CookSignupComponent {
   router: Router;
  constructor(private http: Http,_router: Router){
    this.router = _router;
  }
    
data:any = {
  "name":"GAURAV",
  "email":"gaurav@gmail.com",
  "mobile":"9190987654",
  "address":"BTM",
  "level":"",
  "salary":"",
  "password":"123",
  "confirmPassword":"123" 
}
// name: string = "axs";

  onSubmit() {
    console.log(this.data);

    this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
      .subscribe();
      alert("Signed Successfully!! Go to Login Page");
      this.router.navigateByUrl('/login');
  }
}

@Component({
  templateUrl:'/app/signupCook/signupCook.component.html',
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string) {}
 
    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;
 
        // control value (e.g. password)
        let e = c.root.get(this.validateEqual);
 
        // value not equal
        if (e && v !== e.value) return {
            validateEqual: false
        }
        return null;
    }
}