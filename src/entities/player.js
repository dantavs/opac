export class Player {
    name
    hp

    constructor(name, hp){
        this.name = name
        this.hp = hp
    }

    reduceHP(){
        this.hp--
    }
}