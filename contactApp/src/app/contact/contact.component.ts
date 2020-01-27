import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

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
  @Input() index: number;
  @Output() onUpdate: EventEmitter<any> = new EventEmitter();

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.name = 'John Doe';
    this.email = 'john.doe@gmail.com';
    this.phone = '011642839';
    this.isFavorite = false;
  }

  toggleFavorite(event: any, id: string, isFavorite: boolean): void {
    event.stopPropagation();
    this.contactService.updateContact(id, { isFavorite: !isFavorite }).subscribe(() => this.onUpdate.emit);
  }
}
