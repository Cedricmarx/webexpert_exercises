export class Customer {
    firstName: string;
    lastName: string;
    email: string;
    street: string;
    houseNumber: number;
    zipCode: number;
    city: string;

    constructor(firstName: string, lastName: string, email: string, street: string, houseNumber: number, zipCode: number, city: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.street = street;
        this.houseNumber = houseNumber;
        this.zipCode = zipCode;
        this.city = city;
    }
}