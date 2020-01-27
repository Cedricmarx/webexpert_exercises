import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-remove-event',
  templateUrl: './remove-event.component.html',
  styleUrls: ['./remove-event.component.css']
})
export class RemoveEventComponent implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.route.snapshot.data['event'];
    this.eventService.removeEvent(this.event.id);
  }

}
