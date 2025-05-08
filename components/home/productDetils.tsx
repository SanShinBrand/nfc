"use client";

import React from "react";
import materialImage from "../../public/ProductDetails/material.svg";
import Image from "next/image";
import {
  CalendarDays,
  FileDigit,
  Link,
  Maximize2,
  Palette,
  Store,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSearchParams } from "next/navigation";
import NotFound from "@/app/not-found";

type ProductDetails = {
  id: number;
  release_date: string;
  material: string;
  shopFrom: string;
  shopFromUrl: string;
};
const ProductDetails = ({
  id,
  release_date,
  material,
  shopFrom,
  shopFromUrl,
}: ProductDetails) => {
  const params = useSearchParams();
  const sizeData = params.get("size");

  if (!sizeData ) return <NotFound />;

  const data = sizeData!.split("_");

  const sizeLetter = data[0].toUpperCase();

  const handleClick = (link: string) => {
    // Check if the link starts with http:// or https://
    if (link.startsWith("https://") || link.startsWith("http://")) {
     window.location.href= link
    }
  };

  // new code
  return (
    <div className="w-full px-3 sm:px-6 md:px-8 flex flex-col gap-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {/* product number */}
        <div className="Detail_Lists   ">
          <FileDigit className="Detail_Icon" />
          <div className="flex flex-col ">
            <p className="primary-text">Product Number</p>
            <p className="secondary-text">{id}</p>
          </div>
        </div>
        {/* size */}
        <div className="Detail_Lists  ">
          <Maximize2 className="Detail_Icon" />
          <div className="flex flex-col ">
            <p className="primary-text">size</p>
            <p className="secondary-text">{sizeLetter}</p>
          </div>
        </div>
        {/* color */}
        <div className="Detail_Lists   ">
          <Palette className="Detail_Icon" />
          <div className="flex flex-col ">
            <p className="primary-text">color</p>
            <div className="flex items-center gap-3">
              <p className="secondary-text">Black</p>
              <div className=" w-5 h-5 rounded"></div>
            </div>
          </div>
        </div>
        {/* release date */}
        <div className="Detail_Lists  ">
          <CalendarDays className="Detail_Icon" />
          <div className="flex flex-col ">
            <p className="primary-text">Release Date</p>
            <p className="secondary-text">{release_date}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* material */}
        <div className="Detail_Lists">
          <Image
            src={materialImage}
            alt="material"
            width={40}
            height={40}
            className="p-1"
            unoptimized
            priority
          />
          <div className="flex flex-col ">
            <p className="primary-text">material</p>
            <p className="secondary-text">{material}</p>
          </div>
        </div>
        {/* shop from */}
        <div className="Detail_Lists ">
          <Store className="Detail_Icon" />
          <div className="flex flex-col ">
            <p className="primary-text">Shop from</p>
            <div className="flex gap-3 items-center relative">
              <p className="secondary-text">{shopFrom}</p>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      onClick={() => handleClick(shopFromUrl)}
                      className=" absolute -top-0 -right-8 w-10 hover:cursor-pointer stroke-gray-400 hover:stroke-blue-500  "
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{shopFrom}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
