import { createServer } from 'node:http'
import { PrismaClient } from '@prisma/client'
import { NextRoundController, GameStartController } from './controllers/game-start-controller.js'

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, DELETE",
    "Access-Control-Max-Age": 2592000
}

async function handler(request, response){
    const url = new URL(request.url, "http://localhost:3000")
    const path = url.pathname

    if (path === "/onePieceGame"){
        return GameStartController(request, response, "OPG")
    }

    if (path === "/OPGNextRound"){
        return NextRoundController(request, response)
    }

    if (path === "/jujutsuKaisenGame"){
        return GameStartController(request, response, "JKG")
    }

    response.writeHead(200, headers)
    response.end(JSON.stringify({message: 'Game Server is on!'}))
}

const prisma = new PrismaClient()

const app = createServer(handler)
    .listen(process.env.PORT ? Number(process.env.PORT) : 3333
        , () => console.log('App is running!'))

console.log("Hello One Piece Awesome Cardgame!!")

export {app, headers, prisma}