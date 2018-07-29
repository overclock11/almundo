import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

export interface IHotel {
  id: string;
  name: string;
  stars: number;
  price: number;
  image:string;
  amenities: string[];
}
@Injectable()
export class HotelsService {

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<any>{
    return this.http.get(environment.api+"hotel");
  }

  getByName(name: string): Observable<any>{
    return this.http.get(environment.api+"name/"+name);
  }

  getByStars(stars: number): Observable<any>{
    return this.http.get(environment.api+"stars/"+stars);
  }

}
