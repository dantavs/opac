/*
  Warnings:

  - You are about to drop the `playerCards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "playerCards";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "_CardsToPlayers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CardsToPlayers_A_fkey" FOREIGN KEY ("A") REFERENCES "cards" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CardsToPlayers_B_fkey" FOREIGN KEY ("B") REFERENCES "players" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CardsToPlayers_AB_unique" ON "_CardsToPlayers"("A", "B");

-- CreateIndex
CREATE INDEX "_CardsToPlayers_B_index" ON "_CardsToPlayers"("B");
