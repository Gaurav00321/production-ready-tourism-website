"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Heart } from "lucide-react"

const tours = [
  {
    id: 1,
    title: "Paris City Tour with Eiffel Tower",
    location: "Paris, France",
    image: "/paris-eiffel-tower-city-tour.jpg",
    duration: "8 hours",
    groupSize: "10-15",
    rating: 4.9,
    reviews: 234,
    price: 129,
    badge: "Best Seller",
  },
  {
    id: 2,
    title: "Bali Temple & Rice Terrace Adventure",
    location: "Bali, Indonesia",
    image: "/bali-temple-rice-terrace-adventure.jpg",
    duration: "10 hours",
    groupSize: "8-12",
    rating: 5.0,
    reviews: 189,
    price: 95,
    badge: "Top Rated",
  },
  {
    id: 3,
    title: "Tokyo Street Food & Culture Walk",
    location: "Tokyo, Japan",
    image: "/tokyo-street-food-night-culture.jpg",
    duration: "4 hours",
    groupSize: "6-10",
    rating: 4.8,
    reviews: 156,
    price: 75,
    badge: null,
  },
]

export default function PopularTours() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Most Popular Tours</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Join thousands of travelers on these highly-rated tours and experiences
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {tour.badge && <Badge className="absolute top-4 left-4">{tour.badge}</Badge>}
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 size-9 bg-white/90 hover:bg-white"
                >
                  <Heart className="size-4" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-foreground">{tour.rating}</span>
                  <span>({tour.reviews} reviews)</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 leading-snug">{tour.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tour.location}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Explore All Tours
          </Button>
        </div>
      </div>
    </section>
  )
}
