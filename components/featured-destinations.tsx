import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "/eiffel-tower-paris-romantic-sunset.jpg",
    tours: 24,
    priceFrom: 899,
    badge: "Popular",
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image: "/bali-rice-terraces-temple-tropical.jpg",
    tours: 18,
    priceFrom: 1299,
    badge: "Trending",
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    image: "/tokyo-skyline-night-neon-modern.jpg",
    tours: 32,
    priceFrom: 1599,
    badge: "New",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: "/santorini-white-buildings-blue-domes-aegean-sea.jpg",
    tours: 16,
    priceFrom: 1099,
    badge: "Hot Deal",
  },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Featured Destinations
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Explore the World's Most Amazing Places
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance leading-relaxed">
            Hand-picked destinations that offer unforgettable experiences and
            breathtaking views
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer border-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <Badge className="absolute top-4 left-4">
                    {destination.badge}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-1 text-white mb-1 drop-shadow-md">
                      <MapPin className="size-4" />
                      <span className="text-sm font-semibold">
                        {destination.name}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {destination.tours} tours available
                      </p>
                      <p className="text-lg font-bold text-foreground mt-1">
                        From ${destination.priceFrom}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Destinations
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
