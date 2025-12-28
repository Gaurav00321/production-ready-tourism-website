"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    avatar: "/professional-woman-portrait.png",
    rating: 5,
    text: "The Paris tour exceeded all my expectations! The guide was knowledgeable, the itinerary was perfect, and every moment was magical. Highly recommend Wanderlust for anyone planning their next adventure.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    avatar: "/asian-man-portrait.png",
    rating: 5,
    text: "Bali was absolutely incredible! From the temples to the rice terraces, everything was perfectly organized. The team took care of every detail, making our trip stress-free and unforgettable.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Barcelona, Spain",
    avatar: "/woman-portrait-hispanic.jpg",
    rating: 5,
    text: "Tokyo street food tour was a highlight of our trip! Our guide showed us hidden gems we would never have found on our own. Great value, amazing experience, and memories that will last forever.",
  },
  {
    id: 4,
    name: "David Thompson",
    location: "London, UK",
    avatar: "/man-portrait-british.jpg",
    rating: 5,
    text: "Professional, friendly, and incredibly well-organized. The Santorini sunset tour was breathtaking. Worth every penny and we're already planning our next trip with Wanderlust!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Real stories from real travelers who experienced unforgettable
            journeys with us
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/2"
                >
                  <Card className="border-0 shadow-sm h-full">
                    <CardContent className="p-6">
                      <Quote className="size-10 text-primary/20 mb-4" />
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="size-4 fill-yellow-400 text-yellow-400"
                            />
                          )
                        )}
                      </div>
                      <p className="text-foreground leading-relaxed mb-6 font-medium">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center gap-3">
                        <Avatar className="size-12">
                          <AvatarImage
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
