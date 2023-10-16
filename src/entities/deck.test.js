import { describe, it } from 'node:test'
import { deepStrictEqual, fail, notDeepStrictEqual, ok, strictEqual } from 'node:assert'
import { Deck } from './deck.js'
import { Card } from './card.js'

describe('Deck Entity test suite', () => {
    it('should create a deck', () => {
        try {
            const deck = new Deck()
            ok('Deck created!')
        } catch (error) {
            fail('it should work: ' + error.message)
        }
    })
    it('should be able to add a card in the deck', () => {
        const deck = new Deck()
        const card = new Card("CardName", 1000, "img.url")

        deck.addCard(card)

        deepStrictEqual(deck.cards[0], card)
    })
    it('should not be able to remove a card from the deck with invalid id', () => {
        const deck = new Deck()
        const card = new Card("cardName", 1000, "img.url")
        deck.addCard(card)

        try {
            deck.removeCard("invalid-id")
            fail('it should throw an error!')
        } catch (error) {
            strictEqual(error.message,"ID not found!")
        }
    })
    it('should be able to remove a card from the deck with invalid id', () => {
        const deck = new Deck()
        const card = new Card("cardName", 1000, "img.url")
        deck.addCard(card)

        try {
            deck.removeCard(card.id)
            strictEqual(deck.cards.length, 0)
        } catch (error) {
            fail("It should work: " + error.message)
        }
    })
    it('should shuffle the deck', () => {
        const deck = new Deck()

        const card1 = new Card("cardA", 1000, "img.url")
        const card2 = new Card("cardB", 2000, "img.url")
        const card3 = new Card("cardC", 3000, "img.url")
        const card4 = new Card("cardD", 4000, "img.url")
        const card5 = new Card("cardE", 5000, "img.url")

        deck.addCard(card1)
        deck.addCard(card2)
        deck.addCard(card3)
        deck.addCard(card4)
        deck.addCard(card5)

        const orignalDeck = [card1,card2,card3,card4,card5]

        deck.shuffle()

        notDeepStrictEqual(deck.cards, orignalDeck)
    })
    it('should draw a card from the deck', () => {
        const deck = new Deck()

        const card1 = new Card("cardA", 1000, "img.url")
        const card2 = new Card("cardB", 2000, "img.url")
        const card3 = new Card("cardC", 3000, "img.url")
        const card4 = new Card("cardD", 4000, "img.url")
        const card5 = new Card("cardE", 5000, "img.url")

        deck.addCard(card1)
        deck.addCard(card2)
        deck.addCard(card3)
        deck.addCard(card4)
        deck.addCard(card5)

        const cardNumber = deck.cards.length

        deck.draw()

        strictEqual(deck.cards.length, cardNumber - 1)
    })
})