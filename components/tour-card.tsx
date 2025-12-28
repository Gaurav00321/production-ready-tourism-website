"use client"

import Link from "next/link"
import { Clock, Calendar, Utensils, Hotel, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TourCardProps {
  title: string
  duration: string
  image: string
  price: string
  groupSize?: string
  slug: string
  inclusions?: string[]
  className?: string
}

export function TourCard({
  title,
  duration,
  image,
  price,
  groupSize = "Small Group",
  slug,
  inclusions = ["Meals", "Stay", "Guide"],
  className,
}: TourCardProps) {
  return (
    <Link 
      href={`/tours/${slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1",
        className
      )}
    >
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-xs text-white border border-white/10">
          {groupSize}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1 bg-white/5 py-1 px-2 rounded-lg">
            <Clock className="size-3.5 text-teal-400" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1 bg-white/5 py-1 px-2 rounded-lg">
            <Calendar className="size-3.5 text-teal-400" />
            <span>Daily Departures</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Inclusions */}
        <div className="flex items-center gap-4 mt-auto py-6 border-b border-white/10">
            {inclusions.map((inc) => (
                <div key={inc} className="flex flex-col items-center gap-1 text-center" title={inc}>
                    {inc === "Meals" && <Utensils className="size-4 text-white/50 group-hover:text-white/80 transition-colors" />}
                    {inc === "Stay" && <Hotel className="size-4 text-white/50 group-hover:text-white/80 transition-colors" />}
                    {inc === "Guide" && <User className="size-4 text-white/50 group-hover:text-white/80 transition-colors" />}
                    <span className="text-[10px] uppercase tracking-wide text-white/30">{inc}</span>
                </div>
            ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">All Inclusive</p>
            <p className="text-xl font-bold text-white">{price}</p>
          </div>
          <Button className="rounded-full bg-teal-600 hover:bg-teal-500 text-white pl-5 pr-4 h-11 group/btn">
            Book Now 
            <ArrowRight className="ml-2 size-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Link>
  )
}
