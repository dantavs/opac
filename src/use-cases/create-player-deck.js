import { prisma } from "../index.js"

export async function CreatePlayerDeck(cards, playerId){
    const playerDeck = []

    for (let i=0;i<cards.length;i++){

        const playerCard = await prisma.playerCards.create({
            data: {
               cardId:  cards[i].id
               ,playerId: playerId
            }
        })

        const card = {
            'id': cards[i].id
            ,'name': cards[i].name
            ,'power': cards[i].power
            ,'img': cards[i].img
            ,'cardPlayerId': playerCard.id
        }

        playerDeck.push(card)

    }

    return playerDeck

}