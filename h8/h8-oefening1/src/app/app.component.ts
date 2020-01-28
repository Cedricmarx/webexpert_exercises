import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero.model';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h8-oefening1';
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.fetchHeroes();
  }
  
  fetchHeroes(): void {
    this.heroService.getAll().subscribe(data => this.heroes = data);
  }

  onUpdate(event: string[]): void {
    let name = event[0];
    let rating = event[1];

    this.heroService.getAllFiltered(name, rating).subscribe(data => this.heroes = data);
  }
}
