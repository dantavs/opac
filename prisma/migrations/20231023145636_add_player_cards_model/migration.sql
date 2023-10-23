/*
  Warnings:

  - You are about to drop the `_CardsToPlayers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CardsToPlayers";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "PlayerCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    CONSTRAINT "PlayerCards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PlayerCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
