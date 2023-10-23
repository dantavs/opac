-- CreateTable
CREATE TABLE "games" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "set" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "gameID" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    CONSTRAINT "players_gameID_fkey" FOREIGN KEY ("gameID") REFERENCES "games" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    "set" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "playerCards" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "playerId" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,
    "played" BOOLEAN NOT NULL,
    CONSTRAINT "playerCards_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "playerCards_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "cards" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
