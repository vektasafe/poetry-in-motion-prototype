ALTER TABLE "products" DROP CONSTRAINT "products_creator_id_creators_id_fk";
--> statement-breakpoint
ALTER TABLE "cart_items" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "order_items" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "creator_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "currency" SET DEFAULT 'USD';--> statement-breakpoint
ALTER TABLE "trade_ins" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "wishlists" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "rating_x10" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "reviews" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "ai_insight" text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "in_stock" boolean DEFAULT true NOT NULL;