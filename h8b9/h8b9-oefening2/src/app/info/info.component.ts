import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  clicked: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  toggleClick() {
    this.clicked = !this.clicked;
  }
}
