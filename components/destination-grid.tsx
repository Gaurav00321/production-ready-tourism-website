"use client";

import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
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
import { MapPin, Star, Search, Heart } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    continent: "Europe",
    image: "/paris-aerial-view-architecture.jpg",
    tours: 24,
    rating: 4.9,
    reviews: 1834,
    priceFrom: 899,
    badge: "Popular",
    description:
      "The City of Light awaits with iconic landmarks and world-class culture",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    continent: "Asia",
    image: "/bali-ubud-temples-nature.jpg",
    tours: 18,
    rating: 4.8,
    reviews: 1256,
    priceFrom: 1299,
    badge: "Trending",
    description:
      "Tropical paradise with stunning beaches and rich cultural heritage",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    continent: "Asia",
    image: "/tokyo-shibuya-crossing-cityscape.jpg",
    tours: 32,
    rating: 4.9,
    reviews: 2103,
    priceFrom: 1599,
    badge: "New",
    description: "Where ancient traditions meet cutting-edge technology",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    continent: "Europe",
    image: "/santorini-oia-sunset-caldera.jpg",
    tours: 16,
    rating: 5.0,
    reviews: 987,
    priceFrom: 1099,
    badge: "Hot Deal",
    description:
      "Whitewashed villages perched on volcanic cliffs overlooking the Aegean",
  },
  {
    id: 5,
    name: "New York, USA",
    continent: "Americas",
    image: "/new-york-manhattan-skyline-night.jpg",
    tours: 28,
    rating: 4.7,
    reviews: 3421,
    priceFrom: 1199,
    badge: null,
    description:
      "The city that never sleeps, with world-famous landmarks and culture",
  },
  {
    id: 6,
    name: "Dubai, UAE",
    continent: "Asia",
    image: "/dubai-burj-khalifa-skyline.jpg",
    tours: 21,
    rating: 4.8,
    reviews: 1654,
    priceFrom: 1499,
    badge: "Luxury",
    description:
      "Ultra-modern metropolis with luxury shopping and futuristic architecture",
  },
  {
    id: 7,
    name: "Barcelona, Spain",
    continent: "Europe",
    image: "/barcelona-sagrada-familia-gaudi.jpg",
    tours: 19,
    rating: 4.9,
    reviews: 1432,
    priceFrom: 999,
    badge: null,
    description: "Gaudi's masterpieces and Mediterranean beaches await",
  },
  {
    id: 8,
    name: "Maldives",
    continent: "Asia",
    image: "/maldives-overwater-bungalows-paradise.jpg",
    tours: 12,
    rating: 5.0,
    reviews: 876,
    priceFrom: 2499,
    badge: "Luxury",
    description:
      "Pristine beaches and crystal-clear waters in tropical paradise",
  },
  {
    id: 9,
    name: "Rome, Italy",
    continent: "Europe",
    image: "/rome-colosseum-ancient-ruins.jpg",
    tours: 26,
    rating: 4.8,
    reviews: 2234,
    priceFrom: 1099,
    badge: null,
    description: "The Eternal City with ancient history at every corner",
  },
];

export default function DestinationGrid() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search destinations..."
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
          Showing {destinations.length} destinations
        </p>
      </div>

      {/* Destinations Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <Link key={destination.id} href={`/destinations/${destination.id}`}>
            <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0 h-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {destination.badge && (
                  <Badge className="absolute top-4 left-4">
                    {destination.badge}
                  </Badge>
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
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-1 text-white mb-1 drop-shadow-md">
                    <MapPin className="size-4" />
                    <span className="text-sm font-semibold">
                      {destination.name}
                    </span>
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 text-sm mb-2">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-foreground">
                    {destination.rating}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    ({destination.reviews} reviews)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4 font-medium">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      {destination.tours} tours available
                    </p>
                    <p className="text-lg font-semibold mt-1">
                      From ${destination.priceFrom}
                    </p>
                  </div>
                  <Button size="sm">View Details</Button>
                </div>
              </CardContent>
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
