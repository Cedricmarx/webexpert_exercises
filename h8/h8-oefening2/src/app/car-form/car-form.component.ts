import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateNumber } from '../validators/valid-number.validator';
import { validateConstructionYear } from '../validators/construction-year.validator';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  form: FormGroup;

  @Output() formSubmitted: EventEmitter<Car> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      merk: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      bouwjaar: new FormControl(null, [Validators.required, validateNumber, validateConstructionYear]),
      prijs: new FormControl(null, [Validators.required, validateNumber]),
      stock: new FormControl(null, [Validators.required, validateNumber])
    });
  }

  handleForm(): void {
    let car: Car = new Car(
      this.form.value.merk,
      this.form.value.type,
      parseInt(this.form.value.bouwjaar),
      parseInt(this.form.value.prijs),
      parseInt(this.form.value.stock)
    );
    this.formSubmitted.emit(car);
  }
}
