import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contactApp';
  myContact: Contact;
  contactList: Contact[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.refreshContactList();
    this.myContact = new Contact("Cedric", "marxcedric@hotmail.com", "+32496948481", true, 'assets/avatar.jpg');
  }

  createContact(event: Contact) {
    this.contactService.addContact(event);
    this.refreshContactList();
  }

  refreshContactList() {
    this.contactList = this.contactService.getContactList();
  }
}
