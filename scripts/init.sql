CREATE SCHEMA wedding;

CREATE TABLE "wedding"."guest_list" (
  "guest_id" SERIAL8 NOT NULL,
  "first_name" VARCHAR(50) NOT NULL,
  "last_name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(60) NULL,
  "phone" VARCHAR(20) NULL,
  "is_going" boolean NOT NULL,
  "notes" TEXT NULL,
  PRIMARY KEY ("guest_id")
);
