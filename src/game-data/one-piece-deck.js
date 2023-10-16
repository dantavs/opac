import { Card } from '../entities/card.js'

const card1 = new Card("Luffy", 5000, "img.url")
const card2 = new Card("Zoro", 4000, "img.url")
const card3 = new Card("Sanji", 3000, "img.url")
const card4 = new Card("Nami", 2000, "img.url")
const card5 = new Card("Usopp", 1000, "img.url")

export const onePieceGameDeck = [
    card1, card2, card3, card4, card5
]