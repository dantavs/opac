export class Player {
    id
    name
    hp
    deck
    card

    constructor(name, hp){
        this.name = name
        this.hp = hp
    }

    reduceHP(){
        this.hp--
    }
}