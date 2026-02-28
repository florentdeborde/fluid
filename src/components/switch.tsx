import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../utils/cn"
import { useFieldContext } from "./field"
import type { ComponentSize, ComponentColor } from "../types/shared"

const switchVariants = cva(
  "fluid:peer fluid:inline-flex fluid:shrink-0 fluid:cursor-pointer fluid:items-center fluid:rounded-full fluid:border-2 fluid:border-transparent fluid:transition-colors fluid:focus-visible:outline-none fluid:focus-visible:ring-2 fluid:focus-visible:ring-blue-500 fluid:focus-visible:ring-offset-2 fluid:focus-visible:ring-offset-white fluid:dark:focus-visible:ring-offset-neutral-950 fluid:disabled:cursor-not-allowed fluid:disabled:opacity-50 fluid:data-[state=checked]:bg-[var(--switch-color)] fluid:data-[state=unchecked]:bg-neutral-200 fluid:dark:data-[state=unchecked]:bg-neutral-700",
  {
    variants: {
      color: {
        primary: "fluid:[--switch-color:theme(colors.blue.600)]",
        destructive: "fluid:[--switch-color:theme(colors.red.600)]",
        success: "fluid:[--switch-color:theme(colors.green.600)]",
        neutral: "fluid:[--switch-color:theme(colors.neutral.900)] fluid:dark:[--switch-color:theme(colors.neutral.400)]",
      },
      size: {
        sm: "fluid:h-5 fluid:w-9",
        md: "fluid:h-6 fluid:w-11",
        lg: "fluid:h-8 fluid:w-[60px]",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
    },
  }
)

const thumbVariants = cva(
  "fluid:group fluid:pointer-events-none fluid:block fluid:rounded-full fluid:bg-white fluid:shadow-lg fluid:ring-0 fluid:transition-transform fluid:flex fluid:items-center fluid:justify-center fluid:overflow-hidden fluid:text-neutral-900",
  {
    variants: {
      size: {
        sm: "fluid:h-3 fluid:w-3 fluid:data-[state=checked]:translate-x-[18px] fluid:data-[state=unchecked]:translate-x-[2px]",
        md: "fluid:h-4 fluid:w-4 fluid:data-[state=checked]:translate-x-[22px] fluid:data-[state=unchecked]:translate-x-[2px]",
        lg: "fluid:h-6 fluid:w-6 fluid:data-[state=checked]:translate-x-[30px] fluid:data-[state=unchecked]:translate-x-[2px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface SwitchProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, "color">,
  VariantProps<typeof switchVariants> {
  color?: ComponentColor;
  size?: ComponentSize;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, color, size, id, ...props }, ref) => {
  const generatedId = React.useId();
  const fieldContext = useFieldContext();
  const finalId = id || fieldContext?.id || generatedId;

  return (
    <SwitchPrimitives.Root
      id={finalId}
      className={cn(switchVariants({ color, size }), className)}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(thumbVariants({ size }))}
      />
    </SwitchPrimitives.Root>
  );
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
