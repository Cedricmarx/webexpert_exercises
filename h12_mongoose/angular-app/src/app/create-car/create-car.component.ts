import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  form: FormGroup;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      manufacturer: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      wiki: new FormControl(null, [Validators.required])
    });
  }

  submitForm(): void {
    let car: Car = new Car(
      this.form.value.manufacturer,
      this.form.value.model,
      this.form.value.price,
      this.form.value.wiki
    );

    this.form.reset();
    this.carService.addCar(car).subscribe(() => this.router.navigate(['']));
  }
}
