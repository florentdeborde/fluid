import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const textVariants = cva(
    "fluid:text-neutral-700 fluid:dark:text-neutral-300",
    {
        variants: {
            size: {
                xs: "fluid:text-xs",
                sm: "fluid:text-sm",
                base: "fluid:text-base",
                lg: "fluid:text-lg",
                xl: "fluid:text-xl",
            },
            variant: {
                default: "",
                muted: "fluid:text-neutral-500 fluid:dark:text-neutral-400",
                lead: "fluid:text-xl fluid:text-neutral-600 fluid:dark:text-neutral-400",
            },
            weight: {
                normal: "fluid:font-normal",
                medium: "fluid:font-medium",
                semibold: "fluid:font-semibold",
                bold: "fluid:font-bold",
            },
        },
        defaultVariants: {
            size: "base",
            variant: "default",
            weight: "normal",
        },
    }
);

export interface TextProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
    /** The HTML element to render the text as */
    as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size, variant, weight, as: Comp = "p", ...props }, ref) => {
        return (
            <Comp
                ref={ref as any}
                className={cn(textVariants({ size, variant, weight, className }))}
                {...props}
            />
        );
    }
);

Text.displayName = "Text";

export { Text, textVariants };
