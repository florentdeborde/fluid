import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";

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
    /** If true, the component will render as the child provided (polymorphic) */
    asChild?: boolean;
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
    ({ className, size, variant, weight, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "p";
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
