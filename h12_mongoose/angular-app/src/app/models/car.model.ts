export class Car {
    manufacturer: string;
    model: string;
    price: number;
    wiki: string;
    id: string;

    constructor(manufacturer: string, model: string, price: number, wiki: string, id?: string) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.wiki = wiki;
        this.id = id;
    }
}