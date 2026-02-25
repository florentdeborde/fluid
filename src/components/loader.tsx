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

export interface LoaderProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "size">,
    VariantProps<typeof loaderVariants> {
    /** Optional text to display below the spinner */
    text?: string;
    /** Custom hex or CSS color to override the variant */
    cColor?: string;
}

/**
 * A premium, animated loader component with customizable colors and sizes.
 */
const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
    ({ text, className, size = "md", color = "primary", cColor, style, ...props }, ref) => {
        const currentSize = (size || "md") as LoaderSize;

        return (
            <div
                ref={ref}
                role="status"
                aria-label={text || "Loading"}
                className={cn(loaderVariants({ color, size: currentSize, className }))}
                style={{
                    ...style,
                    ...(cColor && ({ "--loader-color": cColor } as React.CSSProperties)),
                }}
                {...props}
            >
                <div className={cn("relative flex items-center justify-center", spinnerSizes[currentSize])}>
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
                            coreSizes[currentSize]
                        )}
                    />
                </div>

                {text && (
                    <p className="font-sans text-[0.9rem] text-neutral-500 tracking-[0.05em] uppercase animate-in fade-in slide-in-from-bottom-2 duration-500">
                        {text}
                    </p>
                )}
            </div>
        );
    }
);

Loader.displayName = "Loader";

export { Loader };
