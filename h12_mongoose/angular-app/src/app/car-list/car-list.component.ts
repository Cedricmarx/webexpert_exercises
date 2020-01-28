import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Car } from '../models/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.getAll().subscribe(data => this.cars = data);
  }

  clickCar(id: string): void {
    this.router.navigate(['list', id]);
  }

  deleteCar(id: string): void {
    this.router.navigate(['remove', id]);
  }
}
