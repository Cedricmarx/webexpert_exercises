export class Hero {
    abilities: string[];
    avatar: string;
    classType: string;
    difficulty: number;
    dps: number;
    name: string;

    constructor(abilities: string[], avatar: string, classType: string, difficulty: number, dps: number, name: string) {
        this.abilities = abilities;
        this.avatar = avatar;
        this.classType = classType;
        this.difficulty = difficulty;
        this.dps = dps;
        this.name = name;
    }
}