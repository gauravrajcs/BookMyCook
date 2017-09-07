import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';


@Component({

  templateUrl:'/app/searchCook/getSearchCook.component.html'
  
})

export class GetCookSearchComponent {
   router: Router;
  constructor(private http: Http,_router: Router){
    this.router = _router;
  }
    
data:any = {
  // "name":"GAURAV",
   
}
// name: string = "axs";

  onSubmit() {
    // console.log(this.data);

    // this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.data))
    //   .subscribe();
    //   alert("Signed Successfully!! Go to Login Page");
    //   this.router.navigateByUrl('/login');
  }
}