export class Event {
    id: number;
    title: string;
    date: Date;
    address: string;

    constructor(title: string, date: Date, address: string, id?: number) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.address = address;
    }
}