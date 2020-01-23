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
  contactList: Contact[];
  onlyFavorites: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.fetchContactList(this.onlyFavorites);
  }

  createContact(event: Contact) {
    this.contactService.addContact(event).subscribe(() => this.fetchContactList(this.onlyFavorites));
  }

  fetchContactList(onlyFav: boolean): void {
    this.contactService.getContactList(onlyFav).subscribe(data => {
      this.contactList = data;
    });
  }

  handleUpdate(): void {
    this.fetchContactList(this.onlyFavorites);
  }

  toggleView(onlyFav: boolean): void {
    this.onlyFavorites = !onlyFav;
    this.fetchContactList(this.onlyFavorites);
  }
}
