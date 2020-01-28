import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  name: string;
  rating: string;

  @Output() emitUpdate: EventEmitter<string[]> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.name = '';
    this.rating = 'All';
  }

  onKeyUp(): void {
    this.emitUpdate.emit([this.name, this.rating]);
  }

  onChange(): void {
    this.emitUpdate.emit([this.name, this.rating]);
  }
}
