import { onePieceGameDeck } from "../game-data/one-piece-deck.js";
import { Game } from "../use-cases/game.js";

export function OPGStart(){
    const game = new Game(onePieceGameDeck)

    game.start()

    return game
}