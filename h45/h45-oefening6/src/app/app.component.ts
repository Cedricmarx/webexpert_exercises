import { Component, OnInit } from '@angular/core';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening6';
  articles: Article[];

  ngOnInit(): void {
    this.articles = [{id: 1, name: 'Tandenborstel', purchasePrice: 1.5, sellPrice: 3.24, imageUrl: 'assets/toothbrush.png', hyperLink: 'https://www.google.be/search?q=tandenborstel'},
                     {id: 2, name: 'Handdoek', purchasePrice: 2.5, sellPrice: 4.75, imageUrl: 'assets/towel.png', hyperLink: 'https://www.google.be/search?q=handdoek'},
                     {id: 3, name: 'Washandje', purchasePrice: 0.4, sellPrice: 1.20, imageUrl: 'assets/washand.png', hyperLink: 'https://www.google.be/search?q=washandje'},
                     {id: 4, name: 'Keukenrol', purchasePrice: 1.75, sellPrice: 0.65, imageUrl: 'assets/kitchenroll.png', hyperLink: 'https://www.google.be/search?q=keukenrol'}];
  }
}
