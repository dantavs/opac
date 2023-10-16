function validParameters(name, power, img){
    if (name === "" || !name){
        return false
    }

    if (power === "" || !power || isNaN(power)){
        return false
    }

    if (img === "" || !img){
        return false
    }

    return true

}

export class Card {
    id
    name
    power
    img

    constructor(name, power, img){
        if(!validParameters(name, power, img)){
            throw new Error('Invalid parameters!')
        }

        this.id = crypto.randomUUID()
        this.name = name
        this.power = power
        this.img = img
    }
}
