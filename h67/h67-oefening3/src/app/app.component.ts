import { Component, OnInit } from '@angular/core';
import { Customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h67-oefening3';
  customerList: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
  }

  handleForm(form: FormGroup) {
    let customer: Customer = new Customer(
      form.value.firstName,
      form.value.lastName,
      form.value.email,
      form.value.street,
      form.value.houseNumber,
      form.value.zipCode,
      form.value.city
    )

    this.customerService.addCustomer(customer);
  }
}
