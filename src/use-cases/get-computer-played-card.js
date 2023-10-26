import { prisma } from "../index.js";

export async function GetComputerPlayedCard(gamedId, playerId){
    const computerPlayer = await prisma.players.findFirst({
        where: {
            gameID: gamedId
            ,id: {
                not: playerId
            }
        }
    })

    const computerCards = await prisma.playerCards.findMany({
        where: {
            playerId: computerPlayer.id
            ,played: false
        }
    })

    const cardIndex = Math.floor(Math.random()*computerCards.length)

    const computerPlayedCard = computerCards[cardIndex]

    await prisma.playerCards.update({
        data: {
            played: true
        }
        ,where: {
            id: computerPlayedCard.id
        }
    })

    const cpuCard = await prisma.cards.findUnique({
        where: {
            id: computerPlayedCard.cardId
        }
    })

    return ( cpuCard)
}