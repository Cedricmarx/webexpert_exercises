import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL = 'http://localhost:3000/cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Car[]> {
    return this.http.get(BASEAPIURL).pipe(
      map(this.parseCarData)
    );
  }

  getById(id: string): Observable<Car> {
    return this.http.get<Car>(`${BASEAPIURL}/${id}`).pipe(
      map(this.parseCar)
    );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${BASEAPIURL}/${id}`);
  }
  
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${BASEAPIURL}`, car);
  }

  updateCar(id: string, car: any): Observable<Car> {
    car._id = id;
    return this.http.put<Car>(`${BASEAPIURL}`, car);
  }

  parseCarData(json: any[]) {
    return Object.keys(json).map(key => {
      return new Car(json[key].manufacturer, json[key].model, json[key].price, json[key].wiki, json[key]._id);
    });
  }

  parseCar(json: any): Car {
    return new Car(json.manufacturer, json.model, json.price, json.wiki, json._id);
  }
}
