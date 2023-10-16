import { describe, it } from 'node:test'
import { fail, strictEqual } from 'node:assert'
import { Player } from './player.js'

describe('Player Entity test suite', () => {
    it('shuoud create a Player', () => {
        try {
            const player = new Player("playerName", 3)
            strictEqual(player.name,"playerName")
        } catch (error) {
            fail('It should work: ' + error.message)
        }
    })
    it("It should reduce player's HP", () => {
        const player = new Player("playerName", 3)
        player.reduceHP()
        strictEqual(player.hp, 2)
    })
})