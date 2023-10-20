import { headers } from '../index.js'
import { OPGNextRound } from '../services/opg-next-round.js'
import { OPGStart } from '../services/opg-start.js'
import { JKGStart } from '../services/jkg-start.js'
import { once } from 'node:events'
import { Game } from '../use-cases/game.js'
import { onePieceGameDeck } from '../game-data/one-piece-deck.js'

export async function OPGStartController(request, response){  
    const onePieceGame = new OPGStart()

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function OPGNextRoundController(request, response){    
    const { deck, playerA, playerB, status } = JSON.parse(await once(request, 'data'))

    const game = new Game(onePieceGameDeck, playerA, playerB, status)
    game.deck.shuffle()

    const onePieceGame = OPGNextRound(game)

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}

export async function JKGStartController(request, response){  
    const jujutsuKaisenGame = new JKGStart()

    response.writeHead(200, headers)
    response.end(JSON.stringify(jujutsuKaisenGame))
}
