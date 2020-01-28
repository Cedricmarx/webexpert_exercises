import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Car } from '../../models/car.model';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BankAccountService } from '../../services/bank-account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: Car;
  id: string;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private carService: CarService,
    private bankAccountService: BankAccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carService.getById(this.id).subscribe(data => {
      this.car = data;
      this.form = new FormGroup({
        manufacturer: new FormControl(this.car.manufacturer, [Validators.required]),
        model: new FormControl(this.car.model, [Validators.required]),
        price: new FormControl(this.car.price, [Validators.required]),
        wiki: new FormControl(this.car.wiki, [Validators.required])
      });
    });
  }

  submitForm(): void {
    let car: Car = new Car(
      this.form.value.manufacturer,
      this.form.value.model,
      this.form.value.price,
      this.form.value.wiki
    );

    this.carService.updateCar(this.id, car).subscribe(() => { });
  }

  buyCar(): void {
    if (this.car.price <= this.bankAccountService.balance) {
      this.bankAccountService.balance -= this.car.price;
      this.toastr.success(`Bought yourself a ${this.car.manufacturer} ${this.car.model}`, 'Success!');
    } else {
      this.toastr.error('Balance insufficient', 'Error!');
    }
  }
}
