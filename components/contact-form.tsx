"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <FloatingLabelInput id="firstName" name="firstName" label="First Name *" placeholder="John" required />
        </div>
        <div className="space-y-2">
          <FloatingLabelInput id="lastName" name="lastName" label="Last Name *" placeholder="Doe" required />
        </div>
      </div>

      <div className="space-y-2">
        <FloatingLabelInput
          id="email"
          name="email"
          type="email"
          label="Email Address *"
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <FloatingLabelInput
          id="phone"
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="inquiry" className="font-semibold text-foreground">
          Inquiry Type *
        </Label>
        <Select name="inquiry" required>
          <SelectTrigger>
            <SelectValue placeholder="Select an inquiry type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="booking">Tour Booking</SelectItem>
            <SelectItem value="custom">Custom Itinerary</SelectItem>
            <SelectItem value="group">Group Travel</SelectItem>
            <SelectItem value="visa">Visa Assistance</SelectItem>
            <SelectItem value="general">General Question</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-semibold text-foreground">
          Message *
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your travel plans or ask us a question..."
          className="min-h-32"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className="w-full"
      >
        {isSubmitting ? (
          "Sending..."
        ) : isSubmitted ? (
          "Message Sent!"
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send Message
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="/terms" className="underline hover:text-foreground">
          Terms of Service
        </a>
        .
      </p>
    </form>
  );
}
