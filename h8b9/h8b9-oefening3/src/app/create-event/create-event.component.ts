import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    let event: Event = new Event(
      this.form.value.title,
      this.form.value.date,
      this.form.value.address
    )

    this.eventService.addEvent(event);
    this.router.navigate(['']);
  }
}
