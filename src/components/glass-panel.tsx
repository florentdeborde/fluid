import * as React from "react";
import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const glassVariants = cva(
    [
        /* Définition des variables par défaut via Tailwind (supporte le Dark Mode) */
        "[--glass-bg:rgba(255,255,255,0.7)] dark:[--glass-bg:rgba(10,10,10,0.7)]",
        "[--glass-border:rgba(0,0,0,0.08)] dark:[--glass-border:rgba(255,255,255,0.1)]",
        "[--glass-shadow:0_4px_6px_-1px_rgb(0_0_0_/0.1)] dark:[--glass-shadow:0_10px_15px_-3px_rgb(0_0_0_/0.5)]",
        "[--glass-blur:16px] [--glass-radius:1.5rem]",

        /* Application des styles */
        "bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)] border border-[var(--glass-border)]",
        "rounded-[var(--glass-radius)] shadow-[var(--glass-shadow)] transition-all duration-300"
    ],
    {
        variants: {
            size: {
                sm: "p-4",
                md: "p-8",
                lg: "p-12",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export interface GlassPanelProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof glassVariants> {
    /** The content to be rendered inside the panel */
    children: React.ReactNode;
    /** Custom background color (overrides default) */
    cBgColor?: string;
    /** Custom border color (overrides default) */
    cBorderColor?: string;
    /** Custom box shadow string (overrides default) */
    cShadow?: string;
    /** Custom backdrop blur (overrides default) */
    cBlur?: string;
    /** Custom border radius (overrides default) */
    cRadius?: string;
}

/**
 * A fully self-contained premium glassmorphism panel.
 */
const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
    ({ children, className, size, cBgColor, cBorderColor, cShadow, cBlur, cRadius, style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(glassVariants({ size, className }))}
                style={{
                    /* Les props "cProp" écrasent les variables définies dans className */
                    ...(cBgColor && { "--glass-bg": cBgColor }),
                    ...(cBorderColor && { "--glass-border": cBorderColor }),
                    ...(cShadow && { "--glass-shadow": cShadow }),
                    ...(cBlur && { "--glass-blur": cBlur }),
                    ...(cRadius && { "--glass-radius": cRadius }),
                    ...style,
                } as React.CSSProperties}
                {...props}
            >
                {children}
            </div>
        );
    }
);

GlassPanel.displayName = "GlassPanel";

export { GlassPanel };
