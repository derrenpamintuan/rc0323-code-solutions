SELECT COUNT(*) AS "totalFilms",
  "genres"."name" AS "genre"
FROM "films"
JOIN "filmGenre" USING ("filmId")
JOIN "genres" USING ("genreId")
JOIN "castMembers" USING ("filmId")
JOIN "actors" USING ("actorId")
WHERE "actors"."firstName" = 'Lisa'
  and "actors"."lastName" = 'Monroe'
GROUP BY "genreId";
