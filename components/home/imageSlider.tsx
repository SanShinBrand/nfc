"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type imageObject = {
  id: number;
  productId: number;
  imageUrl: string;
  imageAlt: string;
  serialNum: number;
};

type ImageSliderProps = {
  images: imageObject[];
};
export function ImageSlider({ images }: ImageSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    imageUrl: string;
    imageAlt: string;
    serialNum: number;
  } | null>(null);
  
  // Open lightbox with selected image
  const openLightbox = ({
    id,
    imageAlt,
    imageUrl,
    serialNum,
  }: (typeof images)[0]) => {
    setSelectedImage({
      id,
      imageAlt,
      imageUrl,
      serialNum,
    });
    setLightboxOpen(true);
    // Pause auto-scrolling when lightbox is open
    if (api) {
      api.scrollTo(images.findIndex((item) => item.id === id));
    }
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };
  // Set up auto-scrolling
  useEffect(() => {
    if (!api) return;

    // Update current index when the carousel scrolls
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api || lightboxOpen) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [api, lightboxOpen]);

  return (
    <div className="w-full px-0 sm:px-6 md:px-8 top-1 md:mt-3 mt-0">
      {/* <div> */}
      {/* px-4 sm:px-6 md:px-8 */}
      <div className="relative w-full max-w-6xl mx-auto">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true, // Enable infinite looping
          }}
        >
          <CarouselContent className="-ml-3 sm:-ml-4">
            {images.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-3 sm:pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card
                  className="overflow-hidden p-0  border-0 shadow-md cursor-pointer "
                  onClick={() => openLightbox(item)}
                >
                  <CardContent className="p-0 ">
                    <div className="relative aspect-square overflow-hidden ">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.imageAlt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-fill transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    {/* <div className="p-3">
                      <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                    </div> */}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Inside navigation buttons */}
          <div className="absolute left-12 md:left-5  sm:left-14 top-1/2 -translate-y-1/2 z-10 ">
            <CarouselPrevious className="h-12 w-12 sm:h-10 sm:w-10  opacity-70 hover:opacity-100" />
          </div>
          <div className="absolute right-12 md:right-5 sm:right-14 top-1/2 -translate-y-1/2 z-10">
            <CarouselNext className="h-12 w-12 sm:h-10 sm:w-10  opacity-70 hover:opacity-100" />
          </div>
        </Carousel>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden flex items-center justify-center ">
            <div className="absolute top-2 right-2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="bg-black opacity-70 hover:opactiy-100 rounded-full h-8 w-8 sm:h-10 sm:w-10"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <div className="w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={selectedImage.imageUrl || "/placeholder.svg"}
                alt={selectedImage.imageAlt}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold">
                {selectedImage.imageAlt}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
