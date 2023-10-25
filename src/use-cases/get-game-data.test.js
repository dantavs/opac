import { describe, it } from 'node:test'
import { fail, strictEqual } from 'node:assert'
import { GetGameData } from './get-game-data.js'
import { prisma } from '../index.js'

describe('Get Game Data use-case test suite', () => {
    it('should not create a game if the id is invalid', async () => {
        const gameId = "invalid id"

        const game = new GetGameData()

        try {
            await game.execute(gameId)
            fail('it should throw an error: ')
        } catch (error) {
            strictEqual(error.message, "Game not found!")
        }
    })
    it('should not create a game if the id was not informed', async () => {
        const game = new GetGameData()

        try {
            await game.execute()
            fail('it should throw an error: ')
        } catch (error) {
            strictEqual(error.message, "Invalid parameters!")
        }
    })
    it('should create a game if the id is valid', async () => {
        const game = await prisma.games.create({
            data:{
                set: 'OPG'
            }
            
        })

        const getGameData = new GetGameData()
        await getGameData.execute(game.id)

        strictEqual(getGameData.game.id, game.id)
    })
})