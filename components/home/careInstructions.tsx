import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const CareInstructions = () => {
  const imageItems = [
    {
      id: 1,
      src: "../CareLabels/wash/handWash.svg",
      alt: "Image 1",
      title: "Mountain View",
    },
    {
      id: 2,
      src: "../CareLabels/bleach/bleach.svg",
      alt: "Image 2",
      title: "Ocean Sunset",
    },
    {
      id: 3,
      src: "../CareLabels/drying/drying.svg",
      alt: "Image 3",
      title: "Forest Trail",
    },
    {
      id: 4,
      src: "../CareLabels/iron/iron at any temperature.svg",
      alt: "Image 4",
      title: "Desert Landscape",
    },
    {
      id: 5,
      src: "../CareLabels/tumbleDryerCycles&Temperatures/gentle delicate cycle.svg",
      alt: "Image 4",
      title: "Desert Landscape",
    },
    {
      id: 6,
      src: "../CareLabels/wet cleaning/delicate wet cleaning.svg",
      alt: "Image 4",
      title: "Desert Landscape",
    },
  ];

  return (
    <div className="w-full px-3 sm:px-6 md:px-8 flex justify-center gap-2 sm:justify-start mt-4 ">
      {imageItems.map((item) => (
        <div key={item.id}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>{item.alt}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};

export default CareInstructions;
