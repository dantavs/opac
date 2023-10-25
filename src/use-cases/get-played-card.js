import { prisma } from "../index.js";

export async function GetPlayedCard(cardId){
    const playedCardInfo = await prisma.playerCards.findUnique({
        where: {
            id: cardId
        }
    })

    await prisma.playerCards.update({
        data: {
            played: true
        }
        ,where:{
            id: cardId
        }
    })

    const playedCard = await prisma.cards.findUnique({
        where: {
            id: playedCardInfo.cardId
        }
    })

    return ({'playerId': playedCardInfo.playerId, 'playedCard': playedCard})
}