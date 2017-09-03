import { Injectable } from '@angular/core';
export class City {
  constructor(public id: number, public name: string) { }
}
export class Area {
  constructor(public id: number, public cityid: number, public name: string) { }
}


@Injectable()
export class DataService {
  getCities() {
    return [
     new City(1, 'Bengluru' ),
     new City(2, 'Kolkata' ),
     new City(3, 'Mumbai' ),
     new City(4, 'New Delhi' )
    ];
  }
  
  getAreas() {
   return [
     new Area(1, 1, 'BTM 1st Stage' ),
     new Area(2, 1, 'BTM 2nd Stage' ),
     new Area(3, 1, 'JP Nagar'),
     new Area(4, 1, 'Jayanagar'),
     new Area(5, 2, 'Salt Lake' ),
     new Area(6, 2, 'Sealdah'),
     new Area(7, 2, 'Howarh' ),
     new Area(8, 2, 'Weston Street' ),
     new Area(9, 3, 'Malad' ),
     new Area(10, 3, 'Andheri' ),
     new Area(11, 3, 'Navi Mumbai'),
     new Area(12, 3, 'Churchgate' ),
     new Area(13, 4, 'Laxami Nagar' ),
     new Area(14, 4, 'Dwarka' ),
     new Area(15, 4, 'Rohini' ),
     new Area(16, 4, 'Anand Vihar' ),
    ];
  }
}
