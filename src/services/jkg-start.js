import { jujutsuKGameDeck } from "../game-data/jujutsuk-deck.js";
import { Game } from "../use-cases/game.js";

export function OPGStart(){
    const game = new Game(jujutsuKGameDeck)

    game.cardback = "https://www.themoviedb.org/t/p/w1280/tgesDrp8biMFiTEJ5GeZ0JgYphz.png"

    game.start()

    return game
}