import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {
  }

  articleClick(article: Article) {
    alert('Description: ' + article.name + '\r\nSell Price: €' + article.sellPrice + '\r\nPurchase Price: €' + article.purchasePrice);
  }
}
