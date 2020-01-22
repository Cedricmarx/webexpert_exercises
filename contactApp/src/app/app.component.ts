import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contactApp';
  myContact: Contact;
  contactList: Contact[];

  ngOnInit(): void {
    this.contactList = [
      new Contact('jane doe', 'jane.doe@mail.com', '0113448239', true, 'assets/avatar.png'),
      new Contact('john doe', 'john.doe@mail.com', '011424839', false, 'assets/avatar.png'),
      new Contact('Dries Swinnen', 'dries.swinnen@pxl.be', '011664839', true, 'assets/avatar.png')
    ];
  
    this.myContact = new Contact("Cedric", "marxcedric@hotmail.com", "+32496948481", true, 'assets/avatar.jpg');
  }

  createContact(event: Contact) {
    this.contactList.push(event);
  }
}
