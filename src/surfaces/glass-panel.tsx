import * as React from "react";
import { cn } from "../utils/cn";
import type { ComponentSize } from "../types/shared";
import { cva, type VariantProps } from "class-variance-authority";

const glassVariants = cva(
    [
        "fluid:[--glass-bg:rgba(255,255,255,0.7)] fluid:dark:[--glass-bg:rgba(10,10,10,0.7)]",
        "fluid:[--glass-border:rgba(0,0,0,0.08)] fluid:dark:[--glass-border:rgba(255,255,255,0.1)]",
        "fluid:[--glass-shadow:0_4px_6px_-1px_rgb(0_0_0_/0.1)] fluid:dark:[--glass-shadow:0_10px_15px_-3px_rgb(0_0_0_/0.5)]",
        "fluid:[--glass-blur:16px] fluid:[--glass-radius:1.5rem]",


        "fluid:bg-[var(--glass-bg)] fluid:backdrop-blur-[var(--glass-blur)] fluid:border fluid:border-[var(--glass-border)]",
        "fluid:rounded-[var(--glass-radius)] fluid:shadow-[var(--glass-shadow)] fluid:transition-all fluid:duration-300"
    ],
    {
        variants: {
            size: {
                sm: "fluid:p-4",
                md: "fluid:p-8",
                lg: "fluid:p-12",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);



export interface GlassPanelProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'>,
    VariantProps<typeof glassVariants> {
    /** The scale size of the panel's internal padding */
    size?: ComponentSize;
    /** The content to be rendered inside the panel */
    children?: React.ReactNode;
}

/**
 * A fully self-contained premium glassmorphism panel.
 */
const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ children, className, size, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(glassVariants({ size, className }))}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
