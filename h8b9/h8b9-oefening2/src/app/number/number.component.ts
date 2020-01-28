import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  number: number;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.number = this.route.snapshot.params['number'];
  }
}
