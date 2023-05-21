SELECT "addresses"."line1" AS "address",
  "countries"."name" AS "country",
  "cities"."name" AS "city",
  "addresses"."district"
FROM "addresses"
JOIN "cities" USING ("cityId")
JOIN "countries" USING ("countryId");
