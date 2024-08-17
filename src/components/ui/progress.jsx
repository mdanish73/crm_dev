"use client"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, color, value, ...props  }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-3 mt-2 w-full overflow-hidden rounded-full bg-[#1B2E4B]", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${color} transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
