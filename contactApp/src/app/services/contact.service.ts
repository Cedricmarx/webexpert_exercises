import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

const BASEAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts.json';
const CONTACTAPIURL: string = 'https://webexpert1718.firebaseio.com/contacts/';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  getContactList(onlyFavorites: boolean): Observable<Contact[]> {
    return this.httpClient.get(BASEAPIURL).pipe(
      map(this.parseContactData),
      map((contacts: Contact[]) => {
        return onlyFavorites ? this.filterContacts(contacts) : contacts;
      })
    );
  }

  addContact(contact: Contact): Observable<any> {
    return this.httpClient.post(BASEAPIURL, contact);
  }

  updateContact(id: string, data: any): Observable<any> {
    let url: string = `${CONTACTAPIURL}${id}.json`;
    return this.httpClient.patch(url, data);
  }

  getContact(id: string) {
    let url = `${CONTACTAPIURL}${id}.json`;
    return this.httpClient.get(url).pipe(
      map(data => new Contact(data['name'], data['email'], data['phone'], data['isFavorite'], data['avatar'], id))
    );
  }

  deleteContact(id: string) {
    let url = `${CONTACTAPIURL}${id}.json`;
    return this.httpClient.delete(url);
  }

  parseContactData(rawContacts: any[]): Contact[] {
    return Object.keys(rawContacts).map(key => {
      let contact = rawContacts[key];
      return new Contact(
        contact.name,
        contact.email,
        contact.phone,
        contact.isFavorite,
        contact.avatar,
        key
      );
    });
  }

  filterContacts(contacts: Contact[]): Contact[] {
    return contacts.filter(contact => contact.isFavorite);
  }
}
