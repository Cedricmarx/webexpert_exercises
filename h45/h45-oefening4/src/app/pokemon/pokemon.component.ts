import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  @Input() pokemons: Pokemon[];
  @Output() pokemonSelectionChanged: EventEmitter<any> = new EventEmitter();

  constructor(private service: PokemonService) { }

  ngOnInit() {}

  selectPokemon(): void {
    this.service.selectPokemon(this.pokemon.id);
    this.pokemonSelectionChanged.emit(this.pokemon);
  }
}
