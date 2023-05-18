SELECT "customers"."firstName",
  "customers"."lastName"
FROM "rentals"
JOIN "inventory" USING ("inventoryId")
JOIN "customers" USING ("customerId")
JOIN "films" USING ("filmId")
WHERE "title" = 'Magic Mallrats';
