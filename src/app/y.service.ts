import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor( private http: HttpClient) {   }


url="http://localhost:3000/getDate"
ongetData(summary:any){
  return this.http.get(`${this.url}/${summary}`)
}







}
