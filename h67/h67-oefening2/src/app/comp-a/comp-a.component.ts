import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css'],
  providers: [NumberService]
})
export class CompAComponent implements OnInit {
  id: number = 0;

  constructor(private service: NumberService) { }

  ngOnInit() {
  }

  onClick() {
    this.id = this.service.next();
  }
}
