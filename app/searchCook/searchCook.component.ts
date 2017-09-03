import {Component} from '@angular/core';
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

  constructor(private _dataService: DataService) {
    this.cities = this._dataService.getCities();
  }
  
  onSelect(cityid) {
    this.areas = this._dataService.getAreas().filter((item)=> item.cityid == cityid);
  }
}