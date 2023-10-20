import { onePieceGameDeck } from "../game-data/one-piece-deck.js";
import { Game } from "../use-cases/game.js";

export function OPGStart(){
    const game = new Game(onePieceGameDeck)

    game.cardback = "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2022/07/One-Piece-Symbol.png"

    game.start()

    return game
}