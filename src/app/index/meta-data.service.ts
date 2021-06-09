import { Injectable } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import {  Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  public metaUrl = 'https://api.openbrewerydb.org/breweries?';
  // public metaCity = 'https://api.openbrewerydb.org/breweries?';
  public getDetailName(data): Observable<IName[]>{
    
    return this.http.get<IName[]>(this.metaUrl +'by_name=' + data)
   }
   public getDetailCity(data): Observable<ICity[]>{
    
    return this.http.get<ICity[]>(this.metaUrl+ 'by_city=' + data)
     
   }
  constructor(private http: HttpClient) { }
}
interface IName{
  name: string;
}
interface ICity{
  city: string
}
