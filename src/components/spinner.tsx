import * as React from "react";
import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentSize, ComponentColor } from "../types/shared";

const spinnerVariants = cva(
    "fluid:relative fluid:flex fluid:items-center fluid:justify-center fluid:animate-in fluid:fade-in fluid:duration-500",
    {
        variants: {
            color: {
                primary: "fluid:[--spinner-color:theme(colors.blue.600)]",
                destructive: "fluid:[--spinner-color:theme(colors.red.600)]",
                success: "fluid:[--spinner-color:theme(colors.green.600)]",
                neutral: "fluid:[--spinner-color:theme(colors.neutral.600)] fluid:dark:[--spinner-color:theme(colors.neutral.400)]",
            },
            size: {
                sm: "fluid:size-8",
                md: "fluid:size-[60px]",
                lg: "fluid:size-20",
            },
        },
        defaultVariants: {
            color: "primary",
            size: "md",
        },
    }
);

const coreSizes: Record<ComponentSize, string> = {
    sm: "fluid:size-4",
    md: "fluid:size-[30px]",
    lg: "fluid:size-10",
};

export interface SpinnerProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "size">,
    VariantProps<typeof spinnerVariants> {
    /** The semantic color of the spinner */
    color?: ComponentColor;
    /** The scale size of the spinner */
    size?: ComponentSize;
}

/**
 * A minimalist animated spinner component for indicating loading states.
 */
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
    ({ className, size = "md", color = "primary", ...props }, ref) => {
        const currentSize = (size || "md") as ComponentSize;

        return (
            <div
                ref={ref}
                role="status"
                aria-live="polite"
                className={cn(spinnerVariants({ color, size: currentSize, className }))}
                {...props}
            >
                {/* Spinner Ring */}
                <div
                    className={cn(
                        "fluid:absolute fluid:inset-0 fluid:rounded-full fluid:border-3 fluid:border-transparent fluid:animate-spin-custom",
                        "fluid:border-t-[var(--spinner-color)] fluid:border-r-[var(--spinner-color)]"
                    )}
                />

                {/* Spinner Core (Glowing effect) */}
                <div
                    className={cn(
                        "fluid:rounded-full fluid:blur-[8px] fluid:opacity-50 fluid:animate-pulse-custom",
                        "fluid:bg-[var(--spinner-color)]",
                        coreSizes[currentSize]
                    )}
                />
            </div>
        );
    }
);

Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
