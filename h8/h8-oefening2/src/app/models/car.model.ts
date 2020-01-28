export class Car {
    id: string;
    merk: string;
    type: string;
    bouwjaar: number;
    prijs: number;
    stock: number;

    constructor(merk: string, type: string, bouwjaar: number, prijs: number, stock: number, id?: string) {
        this.id = id;
        this.merk = merk;
        this.type = type;
        this.bouwjaar = bouwjaar;
        this.prijs = prijs;
        this.stock = stock;
    }
}