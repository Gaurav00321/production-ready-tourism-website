"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const categories = ["Adventure", "Cultural", "Beach & Relaxation", "City Breaks", "Nature & Wildlife", "Food & Wine"]
const durations = ["Half Day (1-4 hours)", "Full Day (5-8 hours)", "Multi-Day (2-7 days)", "Extended (8+ days)"]
const difficulties = ["Easy", "Moderate", "Challenging", "Difficult"]

export default function TourFilters() {
  const [priceRange, setPriceRange] = React.useState([0, 3000])
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = React.useState<string[]>([])

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleDuration = (duration: string) => {
    setSelectedDurations((prev) => (prev.includes(duration) ? prev.filter((d) => d !== duration) : [...prev, duration]))
  }

  const clearFilters = () => {
    setPriceRange([0, 3000])
    setSelectedCategories([])
    setSelectedDurations([])
  }

  const hasActiveFilters =
    selectedCategories.length > 0 || selectedDurations.length > 0 || priceRange[0] > 0 || priceRange[1] < 3000

  return (
    <div className="space-y-6">
      {/* Active Filters */}
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
              {selectedCategories.map((category) => (
                <Button
                  key={category}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleCategory(category)}
                  className="h-7 text-xs"
                >
                  {category}
                  <X className="size-3 ml-1" />
                </Button>
              ))}
              {selectedDurations.map((duration) => (
                <Button
                  key={duration}
                  variant="secondary"
                  size="sm"
                  onClick={() => toggleDuration(duration)}
                  className="h-7 text-xs"
                >
                  {duration}
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
              <SelectItem value="duration">Duration</SelectItem>
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
          <Slider min={0} max={3000} step={50} value={priceRange} onValueChange={setPriceRange} className="w-full" />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">${priceRange[0]}</span>
            <span className="text-muted-foreground">${priceRange[1]}+</span>
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Duration */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center gap-2">
              <Checkbox
                id={`duration-${duration}`}
                checked={selectedDurations.includes(duration)}
                onCheckedChange={() => toggleDuration(duration)}
              />
              <Label htmlFor={`duration-${duration}`} className="text-sm cursor-pointer">
                {duration}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Difficulty Level */}
      <Card className="border-0 shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-base">Difficulty Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {difficulties.map((difficulty) => (
            <div key={difficulty} className="flex items-center gap-2">
              <Checkbox id={`difficulty-${difficulty}`} />
              <Label htmlFor={`difficulty-${difficulty}`} className="text-sm cursor-pointer">
                {difficulty}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
