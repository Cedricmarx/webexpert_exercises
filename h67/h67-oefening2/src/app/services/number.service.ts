import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {
  id: number = 0;

  constructor() { }

  next() {
    this.id++;
    return this.id;
  }
}
