import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95 cursor-pointer [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                solid: "shadow-sm border-2 border-transparent",
                outline: "border-2 bg-transparent shadow-sm",
                ghost: "bg-transparent border-2 border-transparent",
                link: "bg-transparent underline-offset-4 hover:underline",
            },
            color: {
                primary: "",
                destructive: "",
                success: "",
                neutral: "",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        compoundVariants: [
            // Solid Combinations
            { variant: "solid", color: "primary", className: "bg-blue-600 text-white hover:bg-blue-700" },
            { variant: "solid", color: "destructive", className: "bg-red-600 text-white hover:bg-red-700" },
            { variant: "solid", color: "success", className: "bg-green-600 text-white hover:bg-green-700" },
            { variant: "solid", color: "neutral", className: "bg-neutral-900 text-white hover:bg-neutral-950" },

            // Outline Combinations
            { variant: "outline", color: "primary", className: "border-blue-200 text-blue-600 hover:bg-blue-50" },
            { variant: "outline", color: "destructive", className: "border-red-200 text-red-600 hover:bg-red-50" },
            { variant: "outline", color: "success", className: "border-green-200 text-green-600 hover:bg-green-50" },
            { variant: "outline", color: "neutral", className: "border-neutral-200 text-neutral-900 hover:bg-neutral-100" },

            // Ghost Combinations
            { variant: "ghost", color: "primary", className: "text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
            { variant: "ghost", color: "destructive", className: "text-red-600 hover:bg-red-50 hover:border-red-200" },
            { variant: "ghost", color: "success", className: "text-green-600 hover:bg-green-50 hover:border-green-200" },
            { variant: "ghost", color: "neutral", className: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 hover:border-neutral-200" },

            // Link Combinations
            { variant: "link", color: "primary", className: "text-blue-600" },
            { variant: "link", color: "destructive", className: "text-red-600" },
            { variant: "link", color: "success", className: "text-green-600" },
            { variant: "link", color: "neutral", className: "text-neutral-900" },
        ],
        defaultVariants: {
            variant: "solid",
            color: "primary",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
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
