"use client";

import Image from "next/image";
import React from "react";
import logo_black from "../../public/logo-black-svg.svg";
import { MoveUpRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const handleClick = (link: string) => {
  // Check if the link starts with http:// or https://
  if (link.startsWith("https://") || link.startsWith("http://")) {
   window.location.href= link
  }
};


const OurLink = () => {
  const link = "https://www.google.com";
  return (
    <div className="bg-red-0 w-full px-3 sm:px-6 md:px-8">
      <div className="min-h-[68px] max-h-[68px] flex w-full md:max-w-lg overflow-hidden rounded shadow-md dark:bg-gray-800 ">
        <div className="flex items-center justify-center w-20 sm:w-24 mt bg-white ">
          <Image src={logo_black} alt="logo" width={35} height={35} />
        </div>

        <div className="w-full px-4 bg-gray-500 rounded-r flex items-center justify-between">
          <div>
            {/* <h1 className="font-bold tracking-widest text-xl  text-white "> */}
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-widest">
              SanShin
            </h1>
            <p className="text-white text-sm md:text-lg font-medium -mt-1">
              Flower Edition : Episode 1 Tulip Tee
            </p>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <MoveUpRight
                  className="w-10 h-7 sm:h-9 hover:cursor-pointer hover:stroke-blue-500 "
                  onClick={() => handleClick(link)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>SanShin Product Link</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* <div>
            <MoveUpRight
              className="w-10 h-7 sm:h-9"
              onClick={() => handleClick(link)}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurLink;
