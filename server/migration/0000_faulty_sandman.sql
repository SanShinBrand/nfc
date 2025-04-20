CREATE TABLE "product_care" (
	"id" serial PRIMARY KEY NOT NULL,
	"productId" integer NOT NULL,
	"careUrl" text NOT NULL,
	"careAlt" text NOT NULL,
	"serialNum" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"productId" integer NOT NULL,
	"imageUrl" text NOT NULL,
	"imageAlt" text NOT NULL,
	"serialNum" serial NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"color" text,
	"release_date" text,
	"material" text,
	"shopFrom" text,
	"shopFromUrl" text
);
--> statement-breakpoint
ALTER TABLE "product_care" ADD CONSTRAINT "product_care_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_images" ADD CONSTRAINT "product_images_productId_product_id_fk" FOREIGN KEY ("productId") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;