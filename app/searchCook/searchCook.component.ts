import {Component} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { DataService } from './searchDataservice';
import { City } from './searchDataservice';
import { Area } from './searchDataservice';

@Component({
selector: 'cook-search',
  templateUrl:'/app/searchCook/searchCook.component.html',
  styleUrls:['app/searchCook/searchCook.component.css'],
  
  providers: [DataService],
   
})
export class searchCookComponent{
 selectedCity:City = new City(0, 'Bengluru'); 
  cities: City[];
  areas: Area[];
  router: Router;
  constructor(private http: Http, private _router: Router,private _dataService: DataService) {
    this.cities = this._dataService.getCities();
    this.router = _router;
  }
  search:any = {
    "area":"Bengluru",
    "level":"",
    "querytext":""
  }
  onSelect(cityid) {
    this.areas = this._dataService.getAreas().filter((item)=> item.cityid == cityid);
  }
  onSubmit() {
    console.log(this.search);
    this.http.post('https://us-central1-bookmycook-d8e9b.cloudfunctions.net/signup', JSON.stringify(this.search))
      .subscribe();
    alert("searching data");
     this.router.navigateByUrl('/cooksearchdata');
  }
}