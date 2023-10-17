export function OPGNextRound(game){

    game.playerA.card = game.deck.draw()
    game.playerB.card = game.deck.draw()
    game.state = "inProgress"

    if(game.playerA.card.power > game.playerB.card.power){
        game.playerB.reduceHP()
        game.winner = game.playerA.name
    }else{
        game.playerA.reduceHP()
        game.winner = game.playerB.name
    }

    return game
}