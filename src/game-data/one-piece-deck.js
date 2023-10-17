import { Card } from '../entities/card.js'

const card1 = new Card("Luffy", 5000, "https://freepngimg.com/download/one_piece/23457-1-one-piece-luffy-transparent-background.png")
const card2 = new Card("Zoro", 4000, "https://icons.veryicon.com/png/Movie%20%26%20TV/One%20Piece%20Manga/Roronoa%20Zoro.png")
const card3 = new Card("Sanji", 3000, "https://i.pinimg.com/originals/ee/cc/8d/eecc8d361519737d8d717d034f841521.png")
const card4 = new Card("Nami", 2000, "https://onepiecelendas.files.wordpress.com/2012/08/one_piece_cutout_by_dipset153.png")
const card5 = new Card("Usopp", 1000, "https://i.pinimg.com/originals/ce/99/94/ce999496043af1f0f09489ac2272d957.png")

export const onePieceGameDeck = [
    card1, card2, card3, card4, card5
]