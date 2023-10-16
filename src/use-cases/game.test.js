import { describe, it } from 'node:test'
import { fail, ok, strictEqual } from 'node:assert'
import { Game } from './game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

describe('Game Use Case test suite', () => {
    it('should not create a Game if any deck was informed', () => {
        try {
            const game = new Game()
            fail('It should throw an error!')
        } catch (error) {
            strictEqual(error.message, 'Invalid parameters!')
        }
    })
    it('should create a game if a valid deck was informed', () => {
        const game = new Game(onePieceGameDeck)

        strictEqual(game.status,"notStarted")
    })
    it('should start a game', () => {
        const game = new Game(onePieceGameDeck)

        try {
            game.start()
            strictEqual(game.status, "inProgress")
        } catch (error) {
            fail('It should work: ' + error.message)
        }
    })
    it('should draw a card', () => {
        const game = new Game(onePieceGameDeck)

        const cardNumber = game.deck.cards.length
    
        game.drawCard()

        strictEqual(game.deck.cards.length,cardNumber - 1)
    })
    it("it should reduce a player's HP", () => {
        const game = new Game(onePieceGameDeck)

        const playerAHP = game.playerA.hp

        game.reduceHP(game.playerA.name)

        strictEqual(game.playerA.hp, playerAHP - 1)
    })
    it('should not reduce HP if the player was not found', () => {
        const game = new Game(onePieceGameDeck)

        try {
            game.reduceHP("InvalidPlayer")
            fail('It should throw an error!')
        } catch (error) {
            strictEqual(error.message,'Player not found!')
        }
    })
})