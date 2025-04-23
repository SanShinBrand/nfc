CREATE TABLE "product_to_cares" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"care_id" integer NOT NULL,
	"serial_num" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_to_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer NOT NULL,
	"image_id" integer NOT NULL,
	"serial_num" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_care" DROP CONSTRAINT "product_care_productId_product_id_fk";
--> statement-breakpoint
ALTER TABLE "product_images" DROP CONSTRAINT "product_images_productId_product_id_fk";
--> statement-breakpoint
ALTER TABLE "product_to_cares" ADD CONSTRAINT "product_to_cares_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_to_cares" ADD CONSTRAINT "product_to_cares_care_id_product_care_id_fk" FOREIGN KEY ("care_id") REFERENCES "public"."product_care"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_to_images" ADD CONSTRAINT "product_to_images_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_to_images" ADD CONSTRAINT "product_to_images_image_id_product_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."product_images"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_care" DROP COLUMN "productId";--> statement-breakpoint
ALTER TABLE "product_images" DROP COLUMN "productId";