import { onePieceGameDeck } from "../game-data/one-piece-deck.js";
import { Game } from "../use-cases/game.js";
import { prisma } from "../index.js";

export async function OPGStart(){
    const game = new Game(onePieceGameDeck)

    game.cardback = "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2022/07/One-Piece-Symbol.png"

    const gameDB = await prisma.games.create({
        data: {
            set: "OPG"
        }
    })

    const cards = await prisma.cards.findMany({
        select: {id: true}
        ,where: {
            set: "OPG"
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


    for (let i=0;i<cards.length;i++){
        await prisma.playerCards.create({
            data: {
               cardId:  cards[i].id
               ,playerId: playerA.id
            }
        })

        await prisma.playerCards.create({
            data: {
               cardId:  cards[i].id
               ,playerId: playerB.id
            }
        })

    }


    game.id = gameDB.id
    game.type = "OPG"
    game.playerA.id = playerA.id
    game.playerB.id = playerB.id

    game.start()

    return game
}