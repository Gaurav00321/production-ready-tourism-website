"use client"

import Link from "next/link"
import { MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DestinationCardProps {
  title: string
  location: string
  image: string
  price: string
  rating: number
  slug: string
  description?: string
  className?: string
}

export function DestinationCard({
  title,
  location,
  image,
  price,
  rating,
  slug,
  description,
  className,
}: DestinationCardProps) {
  return (
    <Link 
      href={`/destinations/${slug}`}
      className={cn("group block relative h-[400px] w-full overflow-hidden rounded-3xl", className)}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
        {/* Rating Badge */}
        <div className="absolute top-6 right-6 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 flex items-center gap-1">
            <Star className="size-3 fill-yellow-400 text-yellow-400" />
            <span className="text-white text-xs font-semibold">{rating}</span>
          </div>
        </div>

        <div className="space-y-3 transform transition-all duration-300">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white/70 text-sm mb-1 group-hover:text-teal-400 transition-colors">
                <MapPin className="size-4" />
                <span>{location}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-teal-200 transition-all">
                {title}
              </h3>
            </div>
          </div>

          <p className="text-white/70 line-clamp-2 text-sm font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
            {description || "Explore the beauty and culture of this amazing destination with our premium guided tours."}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider">Starting from</p>
              <p className="text-xl font-bold text-white">{price}</p>
            </div>
            
            <Button size="icon" className="rounded-full bg-white/10 hover:bg-teal-500 text-white border border-white/20 hover:border-teal-500 transition-colors">
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
