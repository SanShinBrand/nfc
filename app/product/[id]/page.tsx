import CareInstructions from "@/components/home/careInstructions";
import ContactUs from "@/components/home/contactUs";
import { ImageSlider } from "@/components/home/imageSlider";
import OurLink from "@/components/home/ourLink";
import ProductDetails from "@/components/home/productDetils";
import SizeChart from "@/components/home/table/sizeChart";
import React from "react";
import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{ id: string; link: string; from: string }>;
};


const page = async ({ params }: Props) => {
  const { id, link, from } = await params;

  if (!id.includes("diPsIsihT")) return <NotFound />;

  const [pid] = id.split("diPsIsihT").map(Number);

  if (isNaN(pid)|| pid < 0) return <NotFound />;

  console.log("link", link);

  const ProductImages = [
    {
      id: 1,
      productId: 1,
      imageUrl:
        "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlzAnRO37k8J0U92pwrDE3hevAYdFOtsxljnfk",
      imageAlt: "string",
      serialNum: 1,
    },
    {
      id: 2,
      productId: 2,
      imageUrl:
        "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZl38klLnyuLMckBQeNFEr2j5bDwx9K8OYtTfHC",
      imageAlt: "string",
      serialNum: 2,
    },
    {
      id: 3,
      productId: 3,
      imageUrl:
        "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlYQH3XSUDBIeLFflNnmJVMb60yYpW8i1ah2Us",
      imageAlt: "string",
      serialNum: 3,
    },
    {
      id: 4,
      productId: 4,
      imageUrl:
        "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlemgGYjlLJl3H0Nmxd7RCYODFjgtVAPKQTu4i",
      imageAlt: "string",
      serialNum: 4,
    },
  ];

  const CareInstructionImages = [
      {
        id : 1,
        careUrl : "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlZdlHkVYzxXuGakK6qpsvdgSA2ctMlmOIfHwi",
        careAlt : "string",
        serialNum : 1,
      },
      {
        id : 2,
        careUrl : "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlGhhu1eLpWbpMUawg92dv6C8uHqXSZjDcekJB",
        careAlt : "string",
        serialNum : 2,
      },
      {
        id : 3,
        careUrl : "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlz6z6qHk8J0U92pwrDE3hevAYdFOtsxljnfk4",
        careAlt : "string",
        serialNum : 3,
      },
      {
        id : 4,
        careUrl : "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlsYrWxUmiDxwqMt1gH4SIPaTVc7JFiXOem5LA",
        careAlt : "string",
        serialNum : 4,
      },
      {
        id : 5, 
        "careUrl": "https://tau3p6lfc9.ufs.sh/f/2rAgtJR6HaZlvlrwwEK8xfKQSCt3NBuWGoPEZe79TczYhbDi",
        careAlt : "string",
        serialNum : 5,
      }
  ]

  return (
    <main className="flex flex-col gap-5 sm:gap-7 md:gap-9">
      {/* <ImageSlider images={product?.imagesLink || [] } /> */}
     
          <ImageSlider
            images={ProductImages.map((link) => ({
              id: link.id,
              productId: link.productId,
              imageUrl: link.imageUrl,
              imageAlt: link.imageAlt,
              serialNum: link.serialNum,
            })).sort((a, b) => a.serialNum - b.serialNum)}
          />
          <OurLink title={"SanShin's Product"} />
          <ProductDetails
            release_date={"2025-2-12"}
            material={"100% cotton"}
            shopFrom={from ? from : "SanShin"}
            shopFromUrl={
              link
                ? link
                : "https://www.facebook.com/profile.php?id=61568217312619&mibextid=ZbWKwL"
            }
            id={pid}
          />
          <CareInstructions
            images={CareInstructionImages.map((link) => ({
              id: link.id,
              careUrl: link.careUrl,
              careAlt: link.careAlt,
              serialNum: link.serialNum,
            }))}
          />
          <SizeChart />
          <ContactUs />
      

      {/* <Footer/> */}
    </main>
  );
};

export default page;
