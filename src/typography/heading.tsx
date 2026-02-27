import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../utils/cn";

const headingVariants = cva(
    "fluid:font-bold fluid:text-neutral-900 fluid:dark:text-white fluid:tracking-tight",
    {
        variants: {
            size: {
                h1: "fluid:text-4xl fluid:lg:text-5xl",
                h2: "fluid:text-3xl fluid:lg:text-4xl",
                h3: "fluid:text-2xl fluid:lg:text-3xl",
                h4: "fluid:text-xl fluid:lg:text-2xl",
                h5: "fluid:text-lg fluid:lg:text-xl",
                h6: "fluid:text-base fluid:lg:text-lg",
            },
        },
        defaultVariants: {
            size: "h2",
        },
    }
);

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
    /** The semantic heading level (h1 through h6) */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /** The visual size of the heading. Defaults to match the level. */
    size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** If true, the component will render as the child provided (polymorphic) */
    asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, level = 2, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6");
        const computedSize = size || `h${level}`;

        return (
            <Comp
                ref={ref}
                className={cn(headingVariants({ size: computedSize, className }))}
                {...props}
            />
        );
    }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
