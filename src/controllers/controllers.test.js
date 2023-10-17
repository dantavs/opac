import { describe, it, before, after } from 'node:test'
import { strictEqual } from 'node:assert'
import { OPGStartController,  OPGNextRoundController } from './one-piece-game-controller.js'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

const BASE_URL = 'http://localhost:3333'

describe('Controllers test suite',() => {
    let _server = {}
    before(async () => {
        _server = (await import('../index.js')).app
        await new Promise(resolve => _server.once('listening', resolve))
    })
    after ( done => _server.close(done))
    it('should start a game', async () => {
        const game = new Game(onePieceGameDeck)
        game.start()

        const request = await fetch(`${BASE_URL}/OPGNextRound`, {
            method: 'POST'
            ,body:JSON.stringify(game)
        })

        strictEqual(request.status, 200)
    })
})