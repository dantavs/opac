import { prisma } from "../index.js"

async function getGame(gameId){
    if (!gameId){
        throw new Error("Invalid parameters!")
    }

    let game = await prisma.games.findUnique({
        where: {
            id: gameId
        }

    })

    if (!game){
        throw new Error('Game not found!')
    }

    return game

}

async function getPlayers(gameId){
    const players = await prisma.players.findMany({
        where: {
            gameID: gameId
        }
    })

    if (!players){
        throw new Error('Inconsistent Game Data!')
    }

    return players
}

async function getDeck(deckCode){
    const deck = await prisma.cards.findMany({
        where: {
            set: deckCode
        }
    })

    if (!deck) {
        throw new Error('Inconsistent Game Data!')
    }

    return deck
}

export class GetGameData {
    game
    players
    deck

    constructor(){
    }

    async execute(gameId){
        const game = await getGame(gameId)
        const players = await getPlayers(game.id)
        const deck = await getDeck(game.set)

        this.game = game
        this.players = players
        this.deck = deck
    }
}