import { GetGameData } from "../use-cases/get-game-data.js"
import { GetPlayedCard } from "../use-cases/get-played-card.js"
import { GetComputerPlayedCard } from "../use-cases/get-computer-played-card.js"
import { Player } from "../entities/player.js"
import { Card } from "../entities/card.js"
import { Game } from "../use-cases/game.js"
import { prisma } from "../index.js"

export async function handleNextRound(gameId, playedCardId){

    const gameData = new GetGameData()
    await gameData.execute(gameId)

    const playedCard = await GetPlayedCard(playedCardId)
    const playerACard = new Card(playedCard.playedCard.name, playedCard.playedCard.power, playedCard.playedCard.img)
    playerACard.id = playedCard.playedCard.id

    const playerA = new Player(gameData.players[0].name, gameData.players[0].hp)
    playerA.id = gameData.players[0].id
    playerA.card = playerACard

    const computerPlayedCard = await GetComputerPlayedCard(gameId, playedCardId)
    const playerBCard = new Card(computerPlayedCard.name, computerPlayedCard.power, computerPlayedCard.img)
    playerACard.id = computerPlayedCard.id

    const playerB = new Player(gameData.players[1].name, gameData.players[1].hp)
    playerB.id = gameData.players[1].id
    playerB.card = playerBCard

    const deck = []
    for (let i=0;i < gameData.deck.length;i++){
        const card = new Card(gameData.deck[i].name,gameData.deck[i].power,gameData.deck[i].img)
        card.id = gameData.deck[i].id

        deck.push(card)
    }

    async function updateLoserHP(playerId, playerHp){
        await prisma.players.update({
            data:{
                hp: playerHp
            }
            ,where:{
                id: playerId
            }
        })

        return true
    }

    let winnerCard, winner, loser 
    if (playerA.card.power > playerB.card.power){
        winnerCard = playerA.card
        winner = playerA.name
        loser = playerB.name
        playerB.reduceHP()
        await updateLoserHP(playerB.id, playerB.hp)
    }else{
        winnerCard = playerB.card
        winner = playerB.name
        loser = playerA.name
        playerA.reduceHP()
        await updateLoserHP(playerA.id, playerA.hp)
    }

    const game = new Game(deck, playerA, playerB, "inProgress")

    game.winner = winner

    return game
}