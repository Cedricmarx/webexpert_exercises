export class Appointment {
    description: string;
    date: Date;
    dayParts: string;
    appointmentType: string;
    reminder: boolean;

    constructor(description: string, date: Date, dayParts: string, appointmentType: string, reminder: boolean) {
        this.description = description;
        this.date = date;
        this.dayParts = dayParts;
        this.appointmentType = appointmentType;
        this.reminder = reminder;
    }
}