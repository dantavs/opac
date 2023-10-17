import { describe, it } from 'node:test'
import { strictEqual } from 'node:assert'
import { OPGNextRound } from './opg-next-round.js'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

describe('OPG Next Round Service test suite', () => {
    var game = new Game(onePieceGameDeck)
    game.start()
    game = OPGNextRound(game)

    game.playerA.card.power = 6000

    strictEqual(game.state,"inProgress")
})