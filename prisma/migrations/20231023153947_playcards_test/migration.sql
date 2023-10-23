/*
  Warnings:

  - Added the required column `playerId` to the `playerCards` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_playerCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "played" BOOLEAN NOT NULL DEFAULT false,
    "playerId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    CONSTRAINT "playerCards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playerCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playerCards" ("cardId", "id", "played") SELECT "cardId", "id", "played" FROM "playerCards";
DROP TABLE "playerCards";
ALTER TABLE "new_playerCards" RENAME TO "playerCards";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
