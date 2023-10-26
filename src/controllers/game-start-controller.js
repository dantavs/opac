import { headers } from '../index.js'
import { NextRound } from '../services/next-round.js'
import { GameStart } from '../services/game-start.js'
import { once } from 'node:events'

export async function GameStartController(request, response, gameType){  
    const onePieceGame = await GameStart(gameType)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function NextRoundController(request, response){    
    const { gameId, cardId } = JSON.parse(await once(request, 'data'))

   const onePieceGame = await NextRound(gameId, cardId)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}