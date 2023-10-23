import { describe, it } from 'node:test'
import { fail, strictEqual } from 'node:assert'
import { CreateGameDeck } from './create-game-deck.js'
import { Card } from '../entities/card.js'

describe('Create Game Deck Use-Case test suite', () => {
    it('should not create a deck if no card was informed', async () => {
        const cards = []

        try {
            const gameDeck = await new CreateGameDeck(cards)
            fail('it should throw an error!')
        } catch (error) {
            strictEqual(error.message, 'No card was informed!')
        }
    })
    it('should create a game deck', async () => {
        const card1 = new Card("cardA", 1000, "img.url")
        const card2 = new Card("cardB", 2000, "img.url")
        const card3 = new Card("cardC", 3000, "img.url")
        const card4 = new Card("cardD", 4000, "img.url")
        const card5 = new Card("cardE", 5000, "img.url")

        const cards = [card1, card2, card3, card4, card5]

        const gameDeck = await new CreateGameDeck(cards)

        strictEqual(gameDeck.cards.length, cards.length)
    })
})