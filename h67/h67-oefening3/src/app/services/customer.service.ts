import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customersDummyData: Customer[];

  constructor() { 
    this.init();
  }

  init(): void {
    this.customersDummyData = [
      new Customer("Cedric", "Marx", "marxcedric@hotmail.com", "Verbindingsstraat", 56, 3700, "Tongeren"),
      new Customer("Chantal", "van der Spoel", "chantalvanderspoel@outlook.com", "Pauwoog", 16, 7908, "Hoogeveen"),
      new Customer("Guy", "Marx", "armond53@hotmail.com", "Verbindingsstraat", 56, 3700, "Tongeren")
    ];
  }

  getAll(): Customer[] {
    return this.customersDummyData;
  }

  addCustomer(customer: Customer): void {
    this.customersDummyData.push(customer);
  }

  removeCustomer(customer: Customer): void {
    for (let index = 0; index < this.customersDummyData.length; index++) {
      const element = this.customersDummyData[index];
      if (element === customer) {
        this.customersDummyData.splice(index, 1);
      }
    }
  }
}
