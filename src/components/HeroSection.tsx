"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const productPhotos = [
    {
        title: "sneakers",
        src: "/sneakers.png",
        id: 1,
    },
    {
        title: "high-tops",
        src: "/high-tops.png",
        id: 2,
    },
    {
        title: "converse",
        src: "/converse.png",
        id: 3,
    },
];

const HeroSection = () => {
    return (
        <div className="w-full max-w-full">
            <Carousel
                className=""
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                opts={{
                    align: "start",
                    loop: true,
                }}
            >
                <CarouselContent>
                    {productPhotos.map((photos) => (
                        <CarouselItem>
                            <Card>
                                <CardContent className="flex items-center justify-center p-6">
                                    <Image
                                        src={photos.src}
                                        width={1200}
                                        height={525}
                                        className="rounded"
                                        sizes="100vw"
                                        alt={photos.title}
                                        key={photos.id}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default HeroSection;
