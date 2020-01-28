import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css'],
  providers: [NumberService]
})
export class CompCComponent implements OnInit {
  id: number = 0;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  onClick() {
    this.id = this.service.next();
  }
}
