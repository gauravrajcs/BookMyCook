import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from "rxjs/operator/map";

@Injectable()
export class SignUpService{
private _url: string = ""
constructor(private _http:Http){} 

// postUserData(){
//  return this._http.get(this._url);
//     .map((response:Response) => response.json());
//     }
   
}   