import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUserViewModel } from '../ViewModel/userViewModel';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http: HttpClient) { }

  add(userData: IUserViewModel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:3300/api/Calculation', JSON.stringify(userData), {headers});
  }
  getCalculation() {
    return this.http.get('http://localhost:3300/api/Calculation');
  }
}
