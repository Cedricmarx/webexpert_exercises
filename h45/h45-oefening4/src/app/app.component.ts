import { Component, OnInit } from '@angular/core';
import { Pokemon } from './models/pokemon.model';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening4';
  selectedPokemon: Pokemon;
  pokemons: Pokemon[];

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.refreshPokemons();
  }

  pokemonChanged(event: Pokemon): void {
    this.selectedPokemon = event;
    this.refreshPokemons();
  }
  
  refreshPokemons(): void {
    this.pokemons = this.service.getAll();
  }

  pokemonsUpdated(): void {
    this.refreshPokemons();
  }
}
