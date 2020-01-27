import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  navigateToEventDetail(id: number): void {
    this.router.navigate(['list', id]);
  }

  removeEvent(id: number): void {
    this.router.navigate(['remove', id]);
  }
}
