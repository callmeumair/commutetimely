CREATE TABLE "early_access_users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"name" varchar(255),
	"use_case" text,
	"location" varchar(255),
	"commute_challenge" text,
	"device" varchar(100),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "early_access_users_email_unique" UNIQUE("email")
);
