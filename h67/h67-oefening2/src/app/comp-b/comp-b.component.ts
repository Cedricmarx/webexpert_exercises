import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css'],
  providers: [NumberService]
})
export class CompBComponent implements OnInit {
  id: number = 0;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  onClick() {
    this.id = this.service.next();
  }
}
