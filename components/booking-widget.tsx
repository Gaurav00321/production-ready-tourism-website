"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CalendarIcon, Minus, Plus, Check } from "lucide-react"
import { format } from "date-fns"

interface BookingWidgetProps {
  tour: {
    title: string
    price: number
  }
}

export default function BookingWidget({ tour }: BookingWidgetProps) {
  const [date, setDate] = React.useState<Date>()
  const [adults, setAdults] = React.useState(2)
  const [children, setChildren] = React.useState(0)
  const [showConfirmation, setShowConfirmation] = React.useState(false)

  const totalPrice = tour.price * adults + tour.price * 0.5 * children

  const handleBooking = () => {
    setShowConfirmation(true)
  }

  return (
    <>
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">From</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${tour.price}</span>
              <span className="text-muted-foreground">/ person</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            {/* Date Picker */}
            <div>
              <Label htmlFor="date" className="mb-2 block">
                Select Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal bg-transparent">
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Slot */}
            <div>
              <Label htmlFor="time" className="mb-2 block">
                Select Time
              </Label>
              <Select defaultValue="morning">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9:00 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (2:00 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Travelers */}
            <div>
              <Label className="mb-3 block">Number of Travelers</Label>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-xs text-muted-foreground">Age 13+</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 bg-transparent"
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{adults}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 bg-transparent"
                      onClick={() => setAdults(adults + 1)}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Children</p>
                    <p className="text-xs text-muted-foreground">Age 0-12</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 bg-transparent"
                      onClick={() => setChildren(Math.max(0, children - 1))}
                    >
                      <Minus className="size-3" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{children}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-8 bg-transparent"
                      onClick={() => setChildren(children + 1)}
                    >
                      <Plus className="size-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Price Breakdown */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">
                ${tour.price} x {adults} adults
              </span>
              <span className="font-semibold">${tour.price * adults}</span>
            </div>
            {children > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  ${tour.price * 0.5} x {children} children
                </span>
                <span className="font-semibold">${tour.price * 0.5 * children}</span>
              </div>
            )}
            <Separator />
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-bold">${totalPrice}</span>
            </div>
          </div>

          <Button size="lg" className="w-full" onClick={handleBooking}>
            Book Now
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            You won't be charged yet. Final payment at checkout.
          </p>
        </CardContent>
      </Card>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <div className="mx-auto size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Check className="size-6 text-primary" />
            </div>
            <DialogTitle className="text-center">Booking Confirmed!</DialogTitle>
            <DialogDescription className="text-center">
              Your tour has been successfully booked. Check your email for confirmation details.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Tour</span>
                <span className="text-sm font-medium">{tour.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date</span>
                <span className="text-sm font-medium">{date ? format(date, "PPP") : "Not selected"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Travelers</span>
                <span className="text-sm font-medium">
                  {adults} adults {children > 0 && `+ ${children} children`}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="text-lg font-bold">${totalPrice}</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" onClick={() => setShowConfirmation(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
