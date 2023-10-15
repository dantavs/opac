import { createServer } from 'node:http'

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, DELETE",
    "Access-Control-Max-Age": 2592000
}

const app = createServer()
    .listen(process.env.PORT ? Number(process.console.env.PORT) : 3333
        , () => console.log('App is running!'))

console.log("Hello One Piece Awesome Cardgame!!")