import { CreateGameDeck } from './create-game-deck.js'
import { Player } from '../entities/player.js'
import { prisma } from '../index.js'

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
    cardback
    id
    type

    constructor(deck, playerA, playerB, status){
        if(!validParameters(deck)){
            throw new Error('Invalid parameters!')
        }

        this.deck = CreateGameDeck(deck)

        if(playerA){
            this.playerA = new Player(playerA.name, playerA.hp)
        }else{
            this.playerA = new Player("Player A", 3)
        }

        if(playerB){
            this.playerB = new Player(playerB.name, playerB.hp)
        }else{
            this.playerB = new Player("Player B", 3)
        }

        if(status){
            this.status = status
        }else{
            this.status = "notStarted"
        }
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