import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL = 'https://autos-f83f9.firebaseio.com/autos';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  id: number = 0;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Car[]> {
    return this.httpClient.get(`${BASEAPIURL}.json`).pipe(
      map(this.parseCarData)
    );
  }

  updateCar(id: string, data: any): Observable<any> {
    return this.httpClient.patch(`${BASEAPIURL}/${id}.json`, data);
  }

  deleteCar(id: string): Observable<any> {
    return this.httpClient.delete(`${BASEAPIURL}/${id}.json`);
  }

  addCar(car: Car): Observable<any> {
    car.id = Math.random().toString(36).substring(7);
    return this.httpClient.post(`${BASEAPIURL}.json`, car);
  }

  parseCarData(rawCarData: any[]): Car[] {
    return Object.keys(rawCarData).map(key => {
      let car: Car = new Car(
        rawCarData[key].merk, rawCarData[key].type,
        rawCarData[key].bouwjaar, rawCarData[key].prijs, rawCarData[key].stock, rawCarData[key].id
      );
      return car;
    });
  }
}
