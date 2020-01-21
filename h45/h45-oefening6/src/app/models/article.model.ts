export class Article {
    id: number;
    name: string;
    purchasePrice: number;
    sellPrice: number;
    imageUrl: string;
    hyperLink: string;

    constructor(id: number, name: string, purchasePrice: number, sellPrice: number, imageUrl: string, hyperLink: string) {
        this.id = id;
        this.name = name;
        this.purchasePrice = purchasePrice;
        this.sellPrice = sellPrice;
        this.imageUrl = imageUrl;
        this.hyperLink = hyperLink;
    }
}