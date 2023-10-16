import { createServer } from 'node:http'
import { OPGStartController } from './controllers/one-piece-game-controller.js'

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, DELETE",
    "Access-Control-Max-Age": 2592000
}

async function handler(request, response){
    const url = new URL(request.url, "http://localhost:3000")
    const path = url.pathname

    if (path === "/onePieceGame"){
        return OPGStartController(request, response)
    }

    response.writeHead(200, headers)
    response.end(JSON.stringify({message: 'Game Server if on!'}))
}

const app = createServer(handler)
    .listen(process.env.PORT ? Number(process.env.PORT) : 3333
        , () => console.log('App is running!'))

console.log("Hello One Piece Awesome Cardgame!!")

export {app, headers}