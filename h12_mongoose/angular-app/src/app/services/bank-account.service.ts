import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {
  balance: number;

  constructor() { 
    this.init();
  }

  init(): void {
    this.balance = 120000;
  }
}
