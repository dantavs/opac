import { onePieceGameDeck } from "../game-data/one-piece-deck.js";
import { Game } from "../use-cases/game.js";
import { prisma } from "../index.js";
import { CreatePlayerDeck } from "../use-cases/create-player-deck.js";

export async function GameStart(gameType){
    const game = new Game(onePieceGameDeck)

    if (gameType == "OPG"){
        game.cardback = "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2022/07/One-Piece-Symbol.png"
    }else{
        game.cardback = "https://www.themoviedb.org/t/p/w1280/tgesDrp8biMFiTEJ5GeZ0JgYphz.png"
    }

    const gameDB = await prisma.games.create({
        data: {
            set: gameType
        }
    })

    const cards = await prisma.cards.findMany({
        where: {
            set: gameType
        }
    })

    const playerA = await prisma.players.create({
        data: {
            name: game.playerA.name
            ,hp: game.playerA.hp
            ,gameID: gameDB.id
        }
    })

    const playerB = await prisma.players.create({
        data: {
            name: game.playerB.name
            ,hp: game.playerB.hp
            ,gameID: gameDB.id
        }
    })

    game.id = gameDB.id
    game.type = gameType
    game.playerA.id = playerA.id
    game.playerB.id = playerB.id
    game.playerA.deck = await CreatePlayerDeck(cards, playerA.id)
    game.playerB.deck = await CreatePlayerDeck(cards, playerB.id)

    game.start()

    return game
}