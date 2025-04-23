import CareInstructions from "@/components/home/careInstructions";
import ContactUs from "@/components/home/contactUs";
import { ImageSlider } from "@/components/home/imageSlider";
import OurLink from "@/components/home/ourLink";
import ProductDetails from "@/components/home/productDetils";
import SizeChart from "@/components/home/table/sizeChart";
import { db } from "@/server";
import React from "react";
import {
  products,
  productCares,
  productImages,
  productToImages,
  productToCares,
} from "@/server/schema";
import { asc } from "drizzle-orm";
import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

type ProductWithRelations = typeof products.$inferSelect & {
  imageLinks: (typeof productToImages.$inferSelect & {
    image: typeof productImages.$inferSelect;
  })[];
  careLinks: (typeof productToCares.$inferSelect & {
    care: typeof productCares.$inferSelect;
  })[];
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  if (!id.includes("diPsIsihT")) return <NotFound />;

  const [qid, pid] = id.split("diPsIsihT").map(Number);

  const QueryId = Number(qid);

  if (isNaN(QueryId)) return <NotFound />;

  const result = await db.query.products.findFirst({
    where: (product, { eq }) => eq(product.id, QueryId),
    with: {
      imageLinks: {
        orderBy: () => [asc(productToImages.serialNum)],
        with: { image: true },
      },
      careLinks: {
        orderBy: () => [asc(productToCares.serialNum)],
        with: { care: true },
      },
    },
  });

  const product = result as ProductWithRelations | undefined;

  // product?.imagesLink.map(link => link.)
  console.log("product", product);

  return (
    <main className="flex flex-col gap-5 sm:gap-7 md:gap-9">
      {/* <ImageSlider images={product?.imagesLink || [] } /> */}
      {product && product.imageLinks && product.imageLinks.length > 0 ? (
        <>
          <ImageSlider
            images={product.imageLinks
              .map((link) => ({
                id: link.image.id,
                productId: link.productId,
                imageUrl: link.image.imageUrl,
                imageAlt: link.image.imageAlt,
                serialNum: link.serialNum,
              }))
              .sort((a, b) => a.serialNum - b.serialNum)}
          />
          <OurLink title={product.title! || "SanShin's Product"}/>
          <ProductDetails
          release_date={product?.release_date || ''}
          material={product?.material || ''}
          shopFrom={product?.shopFrom || ''}
          shopFromUrl={product?.shopFromUrl || ''}
          id={pid}
        />
          <CareInstructions
            images={product?.careLinks.map((link) => ({
              id: link.care.id,
              careUrl: link.care.careUrl,
              careAlt: link.care.careAlt,
              serialNum: link.serialNum,
            }))}
          />
          <SizeChart />
          <ContactUs />
        </>
      ) : (
        <NotFound />
      )}

      {/* <Footer/> */}
    </main>
  );
};

export default page;
