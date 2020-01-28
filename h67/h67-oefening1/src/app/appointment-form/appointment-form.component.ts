import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointmentTypes: string[];

  constructor() { }

  ngOnInit() {
    this.appointmentTypes = ["Ontspanning", "Zakelijk", "Andere"];
  }

  submit(form) {
    let dayParts: string = '';

    if (form.value.morning != null && form.value.morning) {
      dayParts += 'Morning ';
    }

    if (form.value.afternoon != null && form.value.afternoon) {
      dayParts += 'Afternoon';
    }

    let appointment: Appointment = new Appointment(
      form.value.description,
      form.value.date,
      dayParts,
      form.value.appointmentType,
      form.value.reminder
    )

    alert("Description: " + appointment.description + "\r\nDate: " + appointment.date + "\r\nDayPart: " + appointment.dayParts + "\r\nType: " + appointment.appointmentType + "\r\nReminder: " + appointment.reminder);
  }
}
