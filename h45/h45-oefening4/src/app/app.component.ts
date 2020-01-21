import { Component } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h45-oefening4';
  selectedPokemon: Pokemon;

  pokemons: Pokemon[] = [
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

  pokemonChanged(event: Pokemon) {
    this.selectedPokemon = event;
  }
}
