import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import type { ComponentSize, ComponentColor } from "../types/shared";

const buttonVariants = cva(
    "fluid:inline-flex fluid:items-center fluid:justify-center fluid:gap-2 fluid:whitespace-nowrap fluid:rounded-md fluid:text-sm fluid:font-medium fluid:transition-all fluid:focus-visible:outline-none fluid:focus-visible:ring-2 fluid:focus-visible:ring-blue-500 fluid:disabled:pointer-events-none fluid:disabled:opacity-50 fluid:active:scale-95 fluid:cursor-pointer [&_svg]:pointer-events-none [&_svg]:fluid:size-4 [&_svg]:fluid:shrink-0",
    {
        variants: {
            variant: {
                solid: "fluid:shadow-sm fluid:border-2 fluid:border-transparent",
                outline: "fluid:border-2 fluid:bg-transparent fluid:shadow-sm",
                ghost: "fluid:bg-transparent fluid:border-2 fluid:border-transparent",
                link: "fluid:bg-transparent fluid:underline-offset-4 fluid:hover:underline",
            },
            color: {
                primary: "",
                destructive: "",
                success: "",
                neutral: "",
            },
            size: {
                sm: "fluid:h-9 fluid:rounded-md fluid:px-3",
                md: "fluid:h-10 fluid:px-4 fluid:py-2",
                lg: "fluid:h-11 fluid:rounded-md fluid:px-8 fluid:text-base",
                icon: "fluid:h-10 fluid:w-10",
            },
        },
        compoundVariants: [
            // Solid Combinations
            { variant: "solid", color: "primary", className: "fluid:bg-blue-600 fluid:text-white fluid:hover:bg-blue-700 fluid:dark:bg-blue-600 fluid:dark:hover:bg-blue-700" },
            { variant: "solid", color: "destructive", className: "fluid:bg-red-600 fluid:text-white fluid:hover:bg-red-700 fluid:dark:bg-red-600 fluid:dark:hover:bg-red-700" },
            { variant: "solid", color: "success", className: "fluid:bg-green-600 fluid:text-white fluid:hover:bg-green-700 fluid:dark:bg-green-600 fluid:dark:hover:bg-green-700" },
            { variant: "solid", color: "neutral", className: "fluid:bg-neutral-900 fluid:text-white fluid:hover:bg-neutral-950 fluid:dark:bg-white fluid:dark:text-neutral-900 fluid:dark:hover:bg-neutral-200" },

            // Outline Combinations
            { variant: "outline", color: "primary", className: "fluid:border-blue-200 fluid:text-blue-600 fluid:hover:bg-blue-50 fluid:dark:border-blue-800 fluid:dark:text-blue-400 fluid:dark:hover:bg-blue-950/50" },
            { variant: "outline", color: "destructive", className: "fluid:border-red-200 fluid:text-red-600 fluid:hover:bg-red-50 fluid:dark:border-red-800 fluid:dark:text-red-400 fluid:dark:hover:bg-red-950/50" },
            { variant: "outline", color: "success", className: "fluid:border-green-200 fluid:text-green-600 fluid:hover:bg-green-50 fluid:dark:border-green-800 fluid:dark:text-green-400 fluid:dark:hover:bg-green-950/50" },
            { variant: "outline", color: "neutral", className: "fluid:border-neutral-200 fluid:text-neutral-900 fluid:hover:bg-neutral-100 fluid:dark:border-neutral-800 fluid:dark:text-neutral-100 fluid:dark:hover:bg-neutral-900" },

            // Ghost Combinations
            { variant: "ghost", color: "primary", className: "fluid:text-blue-600 fluid:hover:bg-blue-50 fluid:hover:border-blue-200 fluid:dark:text-blue-400 fluid:dark:hover:bg-blue-950/50 fluid:dark:hover:border-blue-800" },
            { variant: "ghost", color: "destructive", className: "fluid:text-red-600 fluid:hover:bg-red-50 fluid:hover:border-red-200 fluid:dark:text-red-400 fluid:dark:hover:bg-red-950/50 fluid:dark:hover:border-red-800" },
            { variant: "ghost", color: "success", className: "fluid:text-green-600 fluid:hover:bg-green-50 fluid:hover:border-green-200 fluid:dark:text-green-400 fluid:dark:hover:bg-green-950/50 fluid:dark:hover:border-green-800" },
            { variant: "ghost", color: "neutral", className: "fluid:text-neutral-600 fluid:hover:bg-neutral-100 fluid:hover:text-neutral-900 fluid:hover:border-neutral-200 fluid:dark:text-neutral-400 fluid:dark:hover:bg-neutral-900 fluid:dark:hover:text-neutral-100 fluid:dark:hover:border-neutral-800" },

            // Link Combinations
            { variant: "link", color: "primary", className: "fluid:text-blue-600 fluid:dark:text-blue-400" },
            { variant: "link", color: "destructive", className: "fluid:text-red-600 fluid:dark:text-red-400" },
            { variant: "link", color: "success", className: "fluid:text-green-600 fluid:dark:text-green-400" },
            { variant: "link", color: "neutral", className: "fluid:text-neutral-900 fluid:dark:text-neutral-100" },
        ],
        defaultVariants: {
            variant: "solid",
            color: "primary",
            size: "md",
        },
    }
);




export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
    /** The semantic color of the button */
    color?: ComponentColor;
    /** The scale size of the button */
    size?: ComponentSize | "icon";
    /** The style variant of the button */
    variant?: "solid" | "outline" | "ghost" | "link";
    /** If true, renders as its children without a wrapping button element */
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant,
        color,
        size,
        asChild = false,
        ...props
    }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(buttonVariants({ variant, color, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
