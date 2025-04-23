import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type careImagesObject = {
  id: number;
    serialNum: number;
    careUrl: string;
    careAlt: string;
}

type careImageProps ={
  images: careImagesObject[]
}

const CareInstructions = ({images}: careImageProps) => {


  return (
    <div className="w-full px-3 sm:px-6 md:px-8 flex justify-center gap-2 sm:justify-start mt-4 ">
      {images.map((img) => (
        <div key={img.id}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  key={img.id}
                  src={img.careUrl}
                  alt={img.careAlt}
                  width={35}
                  height={35}
                  className="cursor-pointer"
                />
              </TooltipTrigger>
              <TooltipContent>{img.careAlt}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};

export default CareInstructions;
