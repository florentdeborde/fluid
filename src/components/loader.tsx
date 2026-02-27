import * as React from "react";
import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentSize, ComponentColor } from "../types/shared";

const loaderVariants = cva(
    "fluid:flex fluid:flex-col fluid:items-center fluid:justify-center fluid:min-h-[200px] fluid:w-full fluid:gap-6",
    {
        variants: {
            color: {
                primary: "fluid:[--loader-color:theme(colors.blue.600)]",
                destructive: "fluid:[--loader-color:theme(colors.red-600)]",
                success: "fluid:[--loader-color:theme(colors.green.600)]",
                neutral: "fluid:[--loader-color:theme(colors.neutral.600)] fluid:dark:[--loader-color:theme(colors.neutral.400)]",
            },

            size: {
                sm: "fluid:gap-4",
                md: "fluid:gap-6",
                lg: "fluid:gap-8",
            },
        },
        defaultVariants: {
            color: "primary",
            size: "md",
        },
    }
);

// Removed local types as we use imported ComponentSize and ComponentColor

const spinnerSizes: Record<ComponentSize, string> = {
    sm: "fluid:size-8",
    md: "fluid:size-[60px]",
    lg: "fluid:size-20",
};

const coreSizes: Record<ComponentSize, string> = {
    sm: "fluid:size-4",
    md: "fluid:size-[30px]",
    lg: "fluid:size-10",
};

const LoaderContext = React.createContext<{ size: ComponentSize; color: ComponentColor }>({
    size: "md",
    color: "primary",
});

export interface LoaderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "size">,
    VariantProps<typeof loaderVariants> {
    /** The semantic color of the loader */
    color?: ComponentColor;
    /** The scale size of the loader */
    size?: ComponentSize;
}

/**
 * Main wrapper for the Loader system.
 */
const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ className, size = "md", color = "primary", children, ...props }, ref) => {
        const currentSize = (size || "md") as ComponentSize;
        const currentColor = (color || "primary") as ComponentColor;

        return (
            <LoaderContext.Provider value={{ size: currentSize, color: currentColor }}>
                <div
                    ref={ref}
                    role="status"
                    className={cn(loaderVariants({ color: currentColor, size: currentSize, className }))}
                    {...props}
                >
                    {children}
                </div>
            </LoaderContext.Provider>
        );
    }
);
Loader.displayName = "Loader";

/**
 * The animated spinner part of the loader.
 */
const LoaderSpinner = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { size } = React.useContext(LoaderContext);

    return (
        <div className={cn("fluid:relative fluid:flex fluid:items-center fluid:justify-center", spinnerSizes[size], className)} {...props}>
            {/* Spinner Ring */}
            <div
                className={cn(
                    "fluid:absolute fluid:inset-0 fluid:rounded-full fluid:border-3 fluid:border-transparent fluid:animate-spin-custom",
                    "fluid:border-t-[var(--loader-color)] fluid:border-r-[var(--loader-color)]"
                )}
            />

            {/* Spinner Core (Glowing effect) */}
            <div
                className={cn(
                    "fluid:rounded-full fluid:blur-[8px] fluid:opacity-50 fluid:animate-pulse-custom",
                    "fluid:bg-[var(--loader-color)]",
                    coreSizes[size]
                )}
            />
        </div>
    );
};
LoaderSpinner.displayName = "LoaderSpinner";

/**
 * Optional text label for the loader.
 */
const LoaderText = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={cn(
            "fluid:font-sans fluid:text-[0.9rem] fluid:text-neutral-500 fluid:dark:text-neutral-400 fluid:tracking-[0.05em] fluid:uppercase fluid:animate-in fluid:fade-in fluid:slide-in-from-bottom-2 fluid:duration-500",
            className
        )}
        {...props}
    />
);


LoaderText.displayName = "LoaderText";

export { Loader, LoaderSpinner, LoaderText };
