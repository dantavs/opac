import { headers } from '../index.js'
import { OPGStart } from '../services/opg-start.js'

export function OPGStartController(request, response){
    const onePieceGame = new OPGStart()

    response.writeHead(200, headers)
    response.end(JSON.stringify(onePieceGame))
}