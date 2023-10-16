import { describe, it } from 'node:test'
import { fail, strictEqual } from 'node:assert'
import { Card } from './card.js'

describe('Card Entity test suite', () => {
    it('should not allow to create a card with invalid parameters', () => {
        try {
            const card = new Card()
            fail('it should throw an error!')
        } catch (error) {
            strictEqual(error.message,'Invalid parameters!')
            
        }
    })
    it('should not allow to create a card with non numerical power', () => {
        try {
            const card = new Card("cardName", "a","img.a")
            fail('it should throw an error!')
        } catch (error) {
            strictEqual(error.message,'Invalid parameters!')
            
        }
    })
    it('should create a card', () => {
        try {
            const card = new Card("cardName", 1000 ,"img.a")
            strictEqual(card.name,"cardName")
        } catch (error) {
            fail('It should work: ' + error.message)
            
        }
    })
})