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

CREATE TABLE "wedding"."music_request" (
  "request_id" SERIAL8 NOT NULL,
  "guest_id" INT8 NOT NULL,
  "name" VARCHAR(50) NOT NULL,
  "artist" VARCHAR(50) NULL,
  PRIMARY KEY ("request_id")
);

ALTER TABLE "wedding"."music_request" ADD CONSTRAINT "fk_music_request_guest_id" FOREIGN KEY ("guest_id") REFERENCES "wedding"."guest_list"("guest_id");
