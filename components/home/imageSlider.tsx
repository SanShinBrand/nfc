"use client";
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
import { Button } from "../ui/button";
import { X } from "lucide-react";

export function ImageSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

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

  // Open lightbox with selected image
  const openLightbox = (image: (typeof imageItems)[0]) => {
    setSelectedImage({
      src: image.src,
      alt: image.alt,
      title: image.title,
    });
    setLightboxOpen(true);
    // Pause auto-scrolling when lightbox is open
    if (api) {
      api.scrollTo(imageItems.findIndex((item) => item.id === image.id));
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
  }, [api,lightboxOpen]);

  return (
    <div className="w-full px-0 sm:px-6 md:px-8 top-1 ">
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
            {imageItems.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-3 sm:pl-4 basis-full sm:basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Card className="overflow-hidden p-0  border-0 shadow-md cursor-pointer " onClick={() => openLightbox(item)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.alt}
                        fill
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
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
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

            <div className="relative w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white">
              <h2 className="text-lg sm:text-xl font-semibold">{selectedImage.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
