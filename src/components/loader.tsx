import * as React from "react";
import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const loaderVariants = cva(
    "flex flex-col items-center justify-center min-h-[200px] w-full gap-6",
    {
        variants: {
            color: {
                primary: "[--loader-color:theme(colors.blue.600)]",
                destructive: "[--loader-color:theme(colors.red-600)]",
                success: "[--loader-color:theme(colors.green.600)]",
                neutral: "[--loader-color:theme(colors.neutral.600)]",
            },
            size: {
                sm: "gap-4",
                md: "gap-6",
                lg: "gap-8",
            },
        },
        defaultVariants: {
            color: "primary",
            size: "md",
        },
    }
);

type LoaderSize = "sm" | "md" | "lg";
type LoaderColor = "primary" | "destructive" | "success" | "neutral";

const spinnerSizes: Record<LoaderSize, string> = {
    sm: "size-8",
    md: "size-[60px]",
    lg: "size-20",
};

const coreSizes: Record<LoaderSize, string> = {
    sm: "size-4",
    md: "size-[30px]",
    lg: "size-10",
};

const LoaderContext = React.createContext<{ size: LoaderSize; color: LoaderColor }>({
    size: "md",
    color: "primary",
});

export interface LoaderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "size">,
    VariantProps<typeof loaderVariants> { }

/**
 * Main wrapper for the Loader system.
 */
const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ className, size = "md", color = "primary", children, ...props }, ref) => {
        const currentSize = (size || "md") as LoaderSize;
        const currentColor = (color || "primary") as LoaderColor;

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
        <div className={cn("relative flex items-center justify-center", spinnerSizes[size], className)} {...props}>
            {/* Spinner Ring */}
            <div
                className={cn(
                    "absolute inset-0 rounded-full border-3 border-transparent animate-spin-custom",
                    "border-t-[var(--loader-color)] border-r-[var(--loader-color)]"
                )}
            />

            {/* Spinner Core (Glowing effect) */}
            <div
                className={cn(
                    "rounded-full blur-[8px] opacity-50 animate-pulse-custom",
                    "bg-[var(--loader-color)]",
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
            "font-sans text-[0.9rem] text-neutral-500 tracking-[0.05em] uppercase animate-in fade-in slide-in-from-bottom-2 duration-500",
            className
        )}
        {...props}
    />
);
LoaderText.displayName = "LoaderText";

export { Loader, LoaderSpinner, LoaderText };
