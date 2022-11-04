CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" ("name")
VALUES ('funny'), ('meme'), ('sports'), ('cats');

-- favorite table
CREATE TABLE "favorites"(
"id" SERIAL PRIMARY KEY,
"image" VARCHAR NOT NULL,
"favorite" BOOLEAN DEFAULT false);

INSERT INTO "favorites" ("image")
VALUES ('https://media0.giphy.com/media/nXUCkgH6BmigU/giphy.gif?cid=31c1246e60zvqsbax6bodmlbeeoi1w1n2hknxzl1t293ayh0&rid=giphy.gif&ct=g');


CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (500) NOT NULL,
    "category-id" INT
);

