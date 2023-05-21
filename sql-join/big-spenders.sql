SELECT "payments"."amount" AS "payment",
  "customers"."firstName",
  "customers"."lastName"
FROM "payments"
JOIN "customers" USING ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
