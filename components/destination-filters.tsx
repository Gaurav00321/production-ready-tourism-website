"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const continents = ["Europe", "Asia", "Americas", "Africa", "Oceania"]
const activities = ["Adventure", "Cultural", "Beach", "City", "Nature", "Food & Wine"]
const seasons = ["Spring", "Summer", "Fall", "Winter"]

export default function DestinationFilters() {
  const [priceRange, setPriceRange] = React.useState([0, 5000])
  const [selectedContinents, setSelectedContinents] = React.useState<string[]>([])
  const [selectedActivities, setSelectedActivities] = React.useState<string[]>([])

  const toggleContinent = (continent: string) => {
    setSelectedContinents((prev) =>
      prev.includes(continent) ? prev.filter((c) => c !== continent) : [...prev, continent],
    )
  }

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity) ? prev.filter((a) => a !== activity) : [...prev, activity],
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 5000])
    setSelectedContinents([])
    setSelectedActivities([])
  }

  const hasActiveFilters =
    selectedContinents.length > 0 || selectedActivities.length > 0 || priceRange[0] > 0 || priceRange[1] < 5000

  return (
    <div className="space-y-6">
      {/* Active Filters Header */}
      {hasActiveFilters && (
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Active Filters</span>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="h-auto p-0 text-xs">
                <X className="size-3 mr-1" />
                Clear All
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedContinents.map((continent) => (
                <Button
                  key={continent}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleContinent(continent)}
                  className="h-7 text-xs"
                >
                  {continent}
                  <X className="size-3 ml-1" />
                </Button>
              ))}
              {selectedActivities.map((activity) => (
                <Button
                  key={activity}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleActivity(activity)}
                  className="h-7 text-xs"
                >
                  {activity}
                  <X className="size-3 ml-1" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sort By */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select defaultValue="popular">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="name">Name: A-Z</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider min={0} max={5000} step={100} value={priceRange} onValueChange={setPriceRange} className="w-full" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">${priceRange[0]}</span>
            <span className="text-muted-foreground">${priceRange[1]}+</span>
          </div>
        </CardContent>
      </Card>

      {/* Continents */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Continents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {continents.map((continent) => (
            <div key={continent} className="flex items-center gap-2">
              <Checkbox
                id={`continent-${continent}`}
                checked={selectedContinents.includes(continent)}
                onCheckedChange={() => toggleContinent(continent)}
              />
              <Label htmlFor={`continent-${continent}`} className="text-sm cursor-pointer">
                {continent}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Activities */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Activities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {activities.map((activity) => (
            <div key={activity} className="flex items-center gap-2">
              <Checkbox
                id={`activity-${activity}`}
                checked={selectedActivities.includes(activity)}
                onCheckedChange={() => toggleActivity(activity)}
              />
              <Label htmlFor={`activity-${activity}`} className="text-sm cursor-pointer">
                {activity}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Best Time to Visit */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Best Time to Visit</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {seasons.map((season) => (
            <div key={season} className="flex items-center gap-2">
              <Checkbox id={`season-${season}`} />
              <Label htmlFor={`season-${season}`} className="text-sm cursor-pointer">
                {season}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
