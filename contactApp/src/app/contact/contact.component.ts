import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  isFavorite: boolean = false;
  
  @Input() contact: Contact;

  constructor() { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.phone = '011642839';
    this.isFavorite = false;
  }
}
