export class Deck {
    cards

    constructor(){this.cards = []}

    addCard(card){
        this.cards.push(card)
    }

    removeCard(cardId){
        let cardNotFound = true
        for (let i=0;i < this.cards.length;i++){
            if(cardId == this.cards[i].id){
                this.cards.splice(i,1)
                cardNotFound = false
            }
        }

        if(cardNotFound){
            throw new Error("ID not found!")
        }
    }

    shuffle(){
        for (let i = this.cards.length - 1;i > 0;i--){
            let randomId = Math.floor(Math.random() * i)

            let cardBuffer = this.cards[i]
            this.cards[i] = this.cards[randomId]
            this.cards[randomId] = cardBuffer
        }

        return true
    }

    draw(){
        return this.cards.shift()
    }
}