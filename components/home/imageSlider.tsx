'use client'
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function ImageSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Sample image data - replace with your actual images
  const imageItems = [
    {
      id: 1,
      src: "/ProductPhoto/1.png",
      alt: "Image 1",
      title: "Mountain View",
    },
    {
      id: 2,
      src: "/ProductPhoto/2.png",
      alt: "Image 2",
      title: "Ocean Sunset",
    },
    {
      id: 3,
      src: "/ProductPhoto/3.png",
      alt: "Image 3",
      title: "Forest Trail",
    },
    {
      id: 4,
      src: "/ProductPhoto/4.png",
      alt: "Image 4",
      title: "Desert Landscape",
    },
  ];

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
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slide every 3 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 relative">
      <Carousel
        setApi={setApi}
        className="w-full max-w-6xl mx-auto"
        opts={{
          align: "start",
          loop: true, // Enable infinite looping
        }}
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {imageItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 sm:pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="overflow-hidden border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  {/* <div className="p-3">
                    <h3 className="font-medium text-sm sm:text-base">
                      {item.title}
                    </h3>
                  </div> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Side navigation buttons */}
        <div className="absolute left-10 sm:left-10 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious className="h-9 w-9 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
        </div>
        <div className="absolute right-10 sm:right-10 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext className="h-9 w-9 sm:h-10 sm:w-10 opacity-70 hover:opacity-100" />
        </div>
      </Carousel>
    </div>
  );
}
