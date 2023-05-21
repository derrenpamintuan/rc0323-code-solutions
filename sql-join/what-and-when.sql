SELECT "releaseYear",
  "genres"."name" AS "genre"
FROM "filmGenre"
JOIN "films" USING ("filmId")
JOIN "genres" USING ("genreId")
WHERE "title" = 'Boogie Amelie';
