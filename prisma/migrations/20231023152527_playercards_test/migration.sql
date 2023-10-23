/*
  Warnings:

  - You are about to drop the column `playerId` on the `playerCards` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_playerCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "played" BOOLEAN NOT NULL DEFAULT false,
    "cardId" TEXT NOT NULL,
    CONSTRAINT "playerCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_playerCards" ("cardId", "id", "played") SELECT "cardId", "id", "played" FROM "playerCards";
DROP TABLE "playerCards";
ALTER TABLE "new_playerCards" RENAME TO "playerCards";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
