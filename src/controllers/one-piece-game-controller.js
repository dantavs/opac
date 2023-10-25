import { headers, prisma } from '../index.js'
import { handleNextRound } from '../services/opg-next-round.js'
import { OPGStart } from '../services/opg-start.js'
import { JKGStart } from '../services/jkg-start.js'
import { once } from 'node:events'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'
import { notEqual } from 'node:assert'

export async function OPGStartController(request, response){  
    const onePieceGame = await OPGStart()

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function OPGNextRoundController(request, response){    
    const { gameId, cardId } = JSON.parse(await once(request, 'data'))

   const onePieceGame = await handleNextRound(gameId, cardId)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function JKGStartController(request, response){  
    const jujutsuKaisenGame = new JKGStart()

    response.writeHead(200, headers)
    response.end(JSON.stringify(jujutsuKaisenGame))
}
