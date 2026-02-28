import * as React from "react";
import { cn } from "../../utils/cn";
import type { PaddingSize, WidthSize } from "../../types/shared";
import { cva, type VariantProps } from "class-variance-authority";

const glassVariants = cva(
    [
        "fluid:[--glass-bg:rgba(255,255,255,0.4)] fluid:dark:[--glass-bg:rgba(255,255,255,0.02)]",
        "fluid:[--glass-border:rgba(255,255,255,0.4)] fluid:dark:[--glass-border:rgba(255,255,255,0.1)]",
        "fluid:[--glass-shadow:0_8px_32px_0_rgba(0,0,0,0.1)] fluid:dark:[--glass-shadow:0_8px_32px_0_rgba(0,0,0,0.8)]",
        "fluid:[--glass-blur:24px] fluid:[--glass-radius:1.5rem]",

        "fluid:bg-[var(--glass-bg)] fluid:backdrop-blur-[var(--glass-blur)] fluid:border fluid:border-[var(--glass-border)]",
        "fluid:rounded-[var(--glass-radius)] fluid:shadow-[var(--glass-shadow)] fluid:transition-all fluid:duration-300"
    ],
    {
        variants: {
            padding: {
                sm: "fluid:p-4",
                md: "fluid:p-8",
                lg: "fluid:p-12",
                xl: "fluid:p-16",
            },
            width: {
                sm: "fluid:w-full fluid:max-w-sm",
                md: "fluid:w-full fluid:max-w-md",
                lg: "fluid:w-full fluid:max-w-lg",
                xl: "fluid:w-full fluid:max-w-2xl",
                full: "fluid:w-full",
                auto: "fluid:w-auto",
            }
        },
        defaultVariants: {
            padding: "md",
            width: "auto",
        },
    }
);



export interface GlassPanelProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'padding'>,
    VariantProps<typeof glassVariants> {
    /** The scale size of the panel's internal padding */
    padding?: PaddingSize;
    /** The predefined width constraints of the panel */
    width?: WidthSize;
    /** The content to be rendered inside the panel */
    children?: React.ReactNode;
}

/**
 * A fully self-contained premium glassmorphism panel.
 */
const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ children, className, padding, width, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(glassVariants({ padding, width, className }))}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
