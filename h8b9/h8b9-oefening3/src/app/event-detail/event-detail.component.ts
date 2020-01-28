import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.route.snapshot.data['event'];
  }
}
