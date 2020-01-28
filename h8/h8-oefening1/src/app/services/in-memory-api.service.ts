import { Injectable } from "@angular/core";
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryApiService implements InMemoryDbService {

    constructor() {}
    
    createDb() {
        const heroes = [
            { name: "soldier 76", dps: 170, difficulty: 1, class: "Offense", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/soldier-76/hero-select-portrait.png", 
            abilities: ["Heavy pulse rifle","Helix rockets","Sprint","Biotic field","Tactical visor"]},
            { name: "Hanzo", dps: 92.5, difficulty: 3, class: "Defence", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/hanzo/hero-select-portrait.png", 
            abilities: ["Storm bow","Sonic arrow","Scatter arrow","Dragon strike"]},
            { name: "Reinhardt", dps: 75, difficulty: 1, class: "Tank", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/reinhardt/hero-select-portrait.png", 
            abilities: ["Rocket hammer","Barrier field","Charge","Fire strike","Earthshatter"]},
            { name: "Lucio", dps: 75, difficulty: 2, class: "Support", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/lucio/hero-select-portrait.png", 
            abilities: ["Sonic amplifier","Crossfade","Amp it up","Sound barrier"]},
            { name: "Genji", dps: 86.5, difficulty: 3, class: "Offense", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/genji/hero-select-portrait.png", 
            abilities: ["Shuriken","Deflect","Swift strike","Dragonblade"]},
            { name: "Ana", dps: 28, difficulty: 2, class: "Support", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/ana/hero-select-portrait.png", 
            abilities: ["Biotic Rifle","Sleep dart","Biotic grenade","Nano boost"]},
            { name: "Pharah", dps: 120, difficulty: 1, class: "Offense", avatar: "https://d1u1mce87gyfbn.cloudfront.net/hero/pharah/hero-select-portrait.png", 
            abilities: ["Rocket launcher","Jump jet","Concussive blast","Barrage"]}
        ];

        return { heroes };
    }
}