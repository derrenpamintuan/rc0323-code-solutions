SELECT count(*),
  "countries"."name"
FROM "cities"
JOIN "countries" USING ("countryId")
GROUP BY "countryId"
ORDER BY "count" DESC;
