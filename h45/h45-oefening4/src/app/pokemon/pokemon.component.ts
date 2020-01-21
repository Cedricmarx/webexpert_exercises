import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() pokemons: Pokemon[];
  @Output() pokemonSelectionChanged: EventEmitter<Pokemon> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectPokemon() {
    this.pokemons.forEach(pokemon => {
      pokemon.isSelected = false;
    });
    
    this.pokemon.isSelected = true;
    this.pokemonSelectionChanged.emit(this.pokemon);
  }
}
