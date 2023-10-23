/*
  Warnings:

  - You are about to drop the `PlayerCards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PlayerCards";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "playerCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "played" BOOLEAN NOT NULL,
    CONSTRAINT "playerCards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playerCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
