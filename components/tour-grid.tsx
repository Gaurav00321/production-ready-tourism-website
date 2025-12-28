"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MapPin, Star, Search, Heart, Clock, Users } from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Paris City Tour with Eiffel Tower & Seine Cruise",
    location: "Paris, France",
    image: "/paris-city-tour-seine-cruise.jpg",
    duration: "8 hours",
    groupSize: "10-15",
    rating: 4.9,
    reviews: 234,
    price: 129,
    badge: "Best Seller",
    category: "City Breaks",
  },
  {
    id: 2,
    title: "Bali Temple & Rice Terrace Adventure",
    location: "Bali, Indonesia",
    image: "/bali-temple-adventure-full.jpg",
    duration: "10 hours",
    groupSize: "8-12",
    rating: 5.0,
    reviews: 189,
    price: 95,
    badge: "Top Rated",
    category: "Cultural",
  },
  {
    id: 3,
    title: "Tokyo Street Food & Culture Walk",
    location: "Tokyo, Japan",
    image: "/tokyo-street-food-culture-walking.jpg",
    duration: "4 hours",
    groupSize: "6-10",
    rating: 4.8,
    reviews: 156,
    price: 75,
    badge: null,
    category: "Food & Wine",
  },
  {
    id: 4,
    title: "Santorini Sunset Sailing & Wine Tasting",
    location: "Santorini, Greece",
    image: "/santorini-sunset-sailing-wine.jpg",
    duration: "5 hours",
    groupSize: "12-16",
    rating: 5.0,
    reviews: 321,
    price: 145,
    badge: "Hot Deal",
    category: "Beach & Relaxation",
  },
  {
    id: 5,
    title: "New York City Highlights Tour",
    location: "New York, USA",
    image: "/new-york-highlights-tour.jpg",
    duration: "6 hours",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 542,
    price: 99,
    badge: null,
    category: "City Breaks",
  },
  {
    id: 6,
    title: "Dubai Desert Safari with BBQ Dinner",
    location: "Dubai, UAE",
    image: "/dubai-desert-safari-bbq.jpg",
    duration: "7 hours",
    groupSize: "20-25",
    rating: 4.8,
    reviews: 412,
    price: 89,
    badge: "Popular",
    category: "Adventure",
  },
];

export default function TourGrid() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tours and experiences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">Search</Button>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {tours.length} tours
        </p>
      </div>

      {/* Tours Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Link key={tour.id} href={`/tours/${tour.id}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {tour.badge && (
                  <Badge className="absolute top-4 left-4">{tour.badge}</Badge>
                )}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 size-9 bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <Heart className="size-4" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2 font-medium">
                  <MapPin className="size-4" />
                  <span>{tour.location}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-snug text-foreground">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-1 text-sm mb-4">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-foreground">
                    {tour.rating}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    ({tour.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock className="size-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="size-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-5 pt-0 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">From</p>
                  <p className="text-2xl font-bold">${tour.price}</p>
                </div>
                <Button>Book Now</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
