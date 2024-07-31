import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { FeaturedBlockAnimateCard } from "@/components/ui/FeaturedBlockAnimateCard"

const services = [
    {
        id: 1,
        title: 'Adaptable',
        description: 'Tailor the AI to fit your unique needs with customizable responses, flexible integration, scalability, and personalized experiences.',
        gotoUrl: '/',
    },
    {
        id: 2,
        title: 'Trainable',
        description: "Enhance the AI's capabilities with custom data training, continuous learning, automated model updates, and domain- specific expertise.",
        gotoUrl: '/',
    },
    {
        id: 3,
        title: 'Secure',
        description: "Protect your data with encryption, compliance with industry standards, regular security audits, robust privacy controls, and efficient incident response.",
        gotoUrl: '/',
    },
    {
        id: 4,
        title: 'Multi-Language Support',
        description: "Break language barriers with support for multiple languages, ensuring smooth and effective communication with a global audience.",
        gotoUrl: '/',
    },
    {
        id: 5,
        title: 'API Flexibility',
        description: "Enjoy the flexibility of a robust API that allows for easy customization and integration with your existing systems and workflows.",
        gotoUrl: '/',
    }
]


export default function ServicesCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="lg:max-w-[40%] xl:max-w-[50%] 2xl:max-w-[70%] md:max-w-[40rem] max-w-xs mx-auto"
        >
            <CarouselContent>
                {services.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3 2xl:basis-1/4">
                        <div className="p-1">
                            <FeaturedBlockAnimateCard title={_?.title} description={_?.description} gotoUrl={_?.gotoUrl} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
