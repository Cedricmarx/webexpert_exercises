import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'h45-oefening5';
  pets: string[];
  petToAdd: string;

  ngOnInit(): void {
    this.pets = ['Hond', 'Kat', 'Papegaai'];
  }

  addPet() {
    if (this.petToAdd != null) {
      this.pets.push(this.petToAdd);
      this.petToAdd = '';
    }
  }

  deletePet(petIndex: number) {
    this.pets.splice(petIndex, 1);
  }
}
