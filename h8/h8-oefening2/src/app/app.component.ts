import { Component, OnInit } from '@angular/core';
import { Car } from './models/car.model';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h8-oefening2';
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getAll().subscribe(data => this.cars = data);
  }

  sellCar(car: Car): void {
    let stock = car.stock - 1;
    if (stock === 0) {
      this.carService.deleteCar(car.id).subscribe(() => this.fetchCars());
    } else {
      this.carService.updateCar(car.id, {stock: stock}).subscribe(() => this.fetchCars());
    }
  }

  handleReceivedCar(event: Car) {
    this.carService.addCar(event).subscribe(() => this.fetchCars());
  }
}
