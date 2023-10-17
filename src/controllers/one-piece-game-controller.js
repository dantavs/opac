import { headers } from '../index.js'
import { OPGNextRound } from '../services/opg-next-round.js'
import { OPGStart } from '../services/opg-start.js'
import { once } from 'node:events'

export async function OPGStartController(request, response){
    const onePieceGame = new OPGStart(game)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function OPGNextRoundController(request, response){
    const { game } = JSON.parse(await once(request, 'data'))
    const onePieceGame = new OPGNextRound(game)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}