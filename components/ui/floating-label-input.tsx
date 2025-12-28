"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ className, label, id, ...props }, ref) => {
  // Generate a unique ID if one isn't provided
  const generatedId = React.useId();
  const inputId = id || generatedId;

  return (
    <div className="relative">
      <Input
        ref={ref}
        id={inputId}
        className={cn(
          "peer h-14 pt-6 pb-1 placeholder:text-transparent focus:ring-0 focus:ring-offset-0",
          className
        )}
        placeholder=" "
        {...props}
      />
      <Label
        htmlFor={inputId}
        className="absolute left-3 top-4 z-10 origin-[0] -translate-y-0 cursor-text text-muted-foreground transition-all duration-200 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-3 peer-[:not(:placeholder-shown)]:scale-75"
      >
        {label}
      </Label>
    </div>
  );
});
FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
