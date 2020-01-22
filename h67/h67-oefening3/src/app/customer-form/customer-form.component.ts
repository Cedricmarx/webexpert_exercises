import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateZipCode } from '../validators/zipcode.validator';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
  @Output() formSubmitted: EventEmitter<FormGroup> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
        firstName: new FormControl(null, [Validators.required]),
        lastName: new FormControl(null, [Validators.required]),
        email: new FormControl('@email.com', [Validators.required, Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')]),
        street: new FormControl(null, [Validators.required]),
        houseNumber: new FormControl(null, [Validators.required]),
        zipCode: new FormControl(null, [Validators.required, validateZipCode]),
        city: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(): void {
    this.formSubmitted.emit(this.form);
    this.form.reset();
  }
}
