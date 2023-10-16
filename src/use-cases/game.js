import { CreateGameDeck } from './create-game-deck.js'
import { Player } from '../entities/player.js'

function validParameters(deck){
    if(!deck || deck === "" || deck.lenth === 0){
        return false
    }

    return true
}

export class Game {
    deck
    playerA
    playerB
    winner
    status

    constructor(deck){
        if(!validParameters(deck)){
            throw new Error('Invalid parameters!')
        }

        this.deck = CreateGameDeck(deck)

        this.playerA = new Player("Player A", 3)
        this.playerB = new Player("Player B", 3)

        this.status = "notStarted"
    }

    start(){
        this.deck.shuffle()
        this.status = "inProgress"

        return true
    }

    drawCard(){
        return this.deck.draw()
    }

    reduceHP(playerName){
        if (playerName === this.playerA.name){
            this.playerA.reduceHP()
        }else{
            if (playerName === this.playerB.name){
                this.playerB.name
            }else{
                throw new Error('Player not found!')
            }
        }
    }
}