import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'
import { OPGNextRound } from './opg-next-round.js'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

describe('OPG Next Round Service test suite', () => {
    it('should go to the next round', () => {

        var game = new Game(onePieceGameDeck)
        game.start()
        game = OPGNextRound(game)
        
        strictEqual(game.state,"inProgress")
    })
})