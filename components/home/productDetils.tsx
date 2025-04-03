"use client";

import React from "react";
import material from "../../public/ProductDetails/material.svg";
import Image from "next/image";
import { Link, Store } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";

const ProductDetails = () => {
  const router = useRouter();
  const link = "http://google.com";

  const handleClick = (link: string) => {
    // Check if the link starts with http:// or https://
    if (link.startsWith("https://") || link.startsWith("http://")) {
      window.open(link, "_blank");
    }
  };

  return (
    <div className="w-full px-3 sm:px-6 md:px-8 space-y-5 ">
      {/* <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">
        Product Information
      </h1> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
        <div className="flex flex-col border-red-500">
          <p className="primary-text">Product Number</p>
          <p className="secondary-text">12/12/2022</p>
        </div>
        <div className="flex flex-col border-red-500">
          <p className="primary-text">size</p>
          <p className="secondary-text">M</p>
        </div>

        <div className="flex flex-col border-red-500">
          <p className="primary-text">color</p>
          <div className="flex items-center gap-3">
            <p className="secondary-text">red</p>
            <div className="bg-red-500 w-5 h-5 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col border-red-500">
          <p className="primary-text">Release Date</p>
          <p className="secondary-text">12/12/2022</p>
        </div>
      </div>

      <div className="flex gap-5">
        <Image
          src={material}
          alt="material"
          width={40}
          height={40}
          className="p-1"
        />
        <div className="flex flex-col border-red-500">
          <p className="primary-text">material</p>
          <p className="secondary-text">cotton</p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Store className="w-10 h-8 stroke-gray-400" />
        <div className="flex flex-col border-red-500">
          <p className="primary-text">Shop from</p>
          <div className="flex gap-3 items-center">
            <p className="secondary-text">SanShin Facebook Page</p>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    onClick={() => handleClick(link)}
                    className="w-10 hover:cursor-pointer stroke-gray-400 hover:stroke-blue-500  "
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>SanShin Facebook Page</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
