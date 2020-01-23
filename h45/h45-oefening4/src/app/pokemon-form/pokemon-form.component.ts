import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {
  pokemonTypes: string[];
  form: FormGroup;
  @Output() onUpdatePokemons: EventEmitter<any> = new EventEmitter();

  constructor(private service: PokemonService) { }

  ngOnInit() {
    this.pokemonTypes = this.service.getTypes();
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
      type: new FormControl(this.pokemonTypes[0]),
      icon: new FormControl(null, [Validators.required])
    })
  }

  handleForm(form) {
    let pokemon = new Pokemon(
      0,
      form.value.name,
      form.value.type,
      form.value.icon,
      false
    );

    this.service.addPokemon(pokemon);
    this.onUpdatePokemons.emit();
  }
}
