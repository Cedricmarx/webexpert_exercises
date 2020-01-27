import { Injectable } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASEAPIURL = 'api/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Hero[]> {
    return this.httpClient.get(BASEAPIURL).pipe(
      map(this.parseHeroData)
    );
  }

  getAllFiltered(name: string, rating: string): Observable<Hero[]> {
    return this.httpClient.get(BASEAPIURL).pipe(
      map(res => this.parseHeroData(res)),
      map(res => {
        return res.filter(item => item.name.toLowerCase().includes(name.toLowerCase()));
      }),
      map(res => {
        if (rating.toLowerCase() != 'all') {
          return res.filter(item => item.difficulty === parseInt(rating));
        } else {
          return res;
        }
      })
    );
  }

  parseHeroData(rawHeroes: any): Hero[] {
    return Object.keys(rawHeroes).map(key => {
      let hero: Hero = new Hero(
        rawHeroes[key].abilities, rawHeroes[key].avatar, rawHeroes[key].class,
        rawHeroes[key].difficulty, rawHeroes[key].dps, rawHeroes[key].name
      );
      return hero;
    })
  }
}
