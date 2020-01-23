import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieuwsbrief',
  templateUrl: './nieuwsbrief.component.html',
  styleUrls: ['./nieuwsbrief.component.css']
})
export class NieuwsbriefComponent implements OnInit {
  email: string;
  submitted: boolean;

  constructor() { }

  ngOnInit() {
    this.email = '';
    this.submitted = false;
  }

  submitEmail() {
    this.submitted = true;
  }
}
