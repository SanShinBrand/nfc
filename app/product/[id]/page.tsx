import CareInstructions from "@/components/home/careInstructions";
import ContactUs from "@/components/home/contactUs";
import { ImageSlider } from "@/components/home/imageSlider";
import OurLink from "@/components/home/ourLink";
import ProductDetails from "@/components/home/productDetils";
import SizeChart from "@/components/home/table/sizeChart";
import { db } from "@/server";
import React from "react";
import { products, productCares, productImages } from "@/server/schema";
import { eq } from "drizzle-orm";
import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

type ProductWithRelations = typeof products.$inferSelect & {
  images: (typeof productImages.$inferSelect)[];
  cares: (typeof productCares.$inferSelect)[];
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  if (!id.includes("diPsIsihT")) return <NotFound />;

  const [qid, pid] = id.split("diPsIsihT").map(Number);
 
  const QueryId = Number(qid);


  const result = await db.query.products.findFirst({
    where: eq(products.id, QueryId),
    with: {
      images: true,
      cares: true,
    },
  });

  if (!result) {
    return <NotFound />;
  }

  const productsInfo = result as ProductWithRelations | undefined;

  return (
    <main className="flex flex-col gap-5 sm:gap-7 md:gap-9">
      <ImageSlider images={productsInfo?.images || [] } />
      <OurLink />
      <ProductDetails
        color={productsInfo?.color || ''}
        release_date={productsInfo?.release_date || ''}
        material={productsInfo?.material || ''}
        shopFrom={productsInfo?.shopFrom || ''}
        shopFromUrl={productsInfo?.shopFromUrl || ''}
        id={pid}
      />
      <CareInstructions images={productsInfo?.cares || []} />
      <SizeChart />
      <ContactUs />
      {/* <Footer/> */}
    </main>
  );
};

export default page;
