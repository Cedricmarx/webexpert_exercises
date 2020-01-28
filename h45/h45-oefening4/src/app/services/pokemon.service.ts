import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: Pokemon[];

  constructor() {
    this.init();
  }
  
  init(): void {
    this.pokemons = [
      { id: 1, name: "Bulbasaur", type: "grass", icon: "assets/bulbasaur.png", isSelected: false },
      { id: 2, name: "Ivysaur", type: "grass", icon: "assets/ivysaur.png", isSelected: false },
      { id: 3, name: "Venusaur", type: "grass", icon: "assets/venusaur.png", isSelected: false },
      { id: 4, name: "Charmander", type: "fire", icon: "assets/charmander.png", isSelected: false },
      { id: 5, name: "Charmeleon", type: "fire", icon: "assets/charmeleon.png", isSelected: false },
      { id: 6, name: "Charizard", type: "fire", icon: "assets/charizard.png", isSelected: false },
      { id: 7, name: "Squirtle", type: "water", icon: "assets/squirtle.png", isSelected: false },
      { id: 8, name: "Wartortle", type: "water", icon: "assets/wartortle.png", isSelected: false },
      { id: 9, name: "Blastoise", type: "water", icon: "assets/blastoise.png", isSelected: false }
    ];
  }

  getAll(): Pokemon[] {
    return this.pokemons;
  }

  selectPokemon(id: number): void {
    this.pokemons.forEach(element => {
      if (element.id === id) {
        element.isSelected = true;
      } else {
        element.isSelected = false;
      }
    });
  }

  addPokemon(pokemon: Pokemon) {
    pokemon.id = this.pokemons[this.pokemons.length - 1].id + 1;
    this.pokemons.push(pokemon);
  }

  getTypes(): string[] {
    return ['grass', 'fire', 'water'];
  }
}
