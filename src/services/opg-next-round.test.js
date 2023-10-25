import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'
import { handleNextRound } from './opg-next-round.js'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

describe('OPG Next Round Service test suite', () => {
    it.skip('should go to the next round', async () => {

        var game = new Game(onePieceGameDeck)
        game.start()
        game = await handleNextRound(game)
        
        strictEqual(game.state,"inProgress")
    })
})