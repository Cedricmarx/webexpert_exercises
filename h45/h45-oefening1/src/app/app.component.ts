import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening1';
  username: string;

  ngOnInit(): void {
    this.username = '';
  }

  clearUsername() {
    this.username = '';
  }
}
