import { Injectable } from '@angular/core';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[];
  id: number = 4;

  constructor() {
    this.init();
  }

  init() {
    this.events = [
      new Event("Test 1", new Date(), "Teststraat 1", 1),
      new Event("Test 2", new Date(), "Teststraat 2", 2),
      new Event("Test 3", new Date(), "Teststraat 3", 3)
    ]
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: number): Event {
    return this.events.find(x => x.id === id);
  }

  addEvent(event: Event): void {
    event.id = this.id;
    this.events.push(event);
    this.id++;
  }

  removeEvent(id: number): void {
    this.events.splice(this.events.indexOf(this.getEvent(id)), 1);
  }
}
