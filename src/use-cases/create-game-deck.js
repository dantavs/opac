import { Deck } from '../entities/deck.js'

function validParemeters(cards){
    if (cards.length === 0){
        return false
    }

    return true
}

export function CreateGameDeck(cards){
    if(!validParemeters(cards)){
        throw new Error ('No card was informed!')
    }

    const deck = new Deck()

    for (let i = 0;i < cards.length; i++){
        deck.addCard(cards[i])
    }

    return deck

}