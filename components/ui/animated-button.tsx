"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export function AnimatedButton({
  children,
  className,
  icon = <Phone className="size-4" />,
  ...props
}: AnimatedButtonProps) {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden transition-all duration-300 hover:pr-12",
        className
      )}
      {...props}
    >
      <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2">
        {children}
      </span>
      <div className="absolute right-0 top-0 flex h-full w-0 transform items-center justify-center bg-white/20 opacity-0 transition-all duration-300 ease-out group-hover:w-10 group-hover:opacity-100 dark:bg-black/20">
        <span className="translate-x-4 transition-transform duration-300 group-hover:translate-x-0">
          {icon}
        </span>
      </div>
    </Button>
  );
}
