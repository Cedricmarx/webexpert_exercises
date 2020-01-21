export class Pokemon {
    id: number;
    name: string;
    type: string;
    icon: string;
    isSelected: boolean;

    constructor(id: number, name: string, type: string, icon: string, isSelected: boolean) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.icon = icon;
        this.isSelected = isSelected;
    }
}