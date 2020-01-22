import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../models/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() customer: Customer;
  
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {}

  removeCustomer(): void {
    this.customerService.removeCustomer(this.customer);
  }
}
