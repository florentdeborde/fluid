import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ArrowLeft } from "lucide-react";
import { cn } from "../utils/cn";
import { Heading, type HeadingProps } from "../typography/heading";
import { Text, type TextProps } from "../typography/text";

/* -------------------------------------------------------------------------- */
/*                                Shell BackLink                              */
/* -------------------------------------------------------------------------- */

export interface ShellBackLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The path or URL to go back to */
    backTo?: string;
    /** If true, the component will render as the child provided (polymorphic) */
    asChild?: boolean;
    /** Label for the back button */
    label?: string;
    /** Optional custom icon */
    icon?: React.ReactNode;
}

const ShellBackLink = React.forwardRef<HTMLAnchorElement, ShellBackLinkProps>(
    ({ className, asChild = false, label, icon, backTo, href, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "a";
        const targetHref = backTo || href;

        return (
            <Comp
                ref={ref}
                href={!asChild ? targetHref : undefined}
                className={cn(
                    "fluid:absolute fluid:top-6 fluid:left-6 fluid:inline-flex fluid:items-center fluid:gap-2 fluid:text-neutral-500 fluid:no-underline fluid:font-semibold fluid:transition-all fluid:hover:text-neutral-900 fluid:dark:hover:text-neutral-100 fluid:hover:-translate-x-1 fluid:cursor-pointer",
                    className
                )}

                {...props}
            >
                {asChild ? (
                    children
                ) : (
                    <>
                        {icon || <ArrowLeft className="fluid:size-5" />}
                        {label || children || "Back"}
                    </>
                )}
            </Comp>
        );
    }
);
ShellBackLink.displayName = "ShellBackLink";

/* -------------------------------------------------------------------------- */
/*                                    Shell                                   */
/* -------------------------------------------------------------------------- */

const widths = {
    sm: "fluid:max-w-3xl",
    md: "fluid:max-w-5xl",
    lg: "fluid:max-w-7xl",
    xl: "fluid:max-w-screen-xl",
    full: "fluid:max-w-full",
};

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Max width of the content container */
    width?: keyof typeof widths;
}

/**
 * Header section for Title and Subtitle.
 */
const ShellHeader = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <header className={cn("fluid:mb-8 fluid:mt-4 fluid:flex fluid:flex-col fluid:gap-2", className)} {...props} />
);
ShellHeader.displayName = "ShellHeader";

/**
 * Main Page Title (H1).
 */
const ShellTitle = ({ className, level = 1, asChild = false, ...props }: HeadingProps) => (
    <Heading level={level} asChild={asChild} className={className} {...props} />
);
ShellTitle.displayName = "ShellTitle";

/**
 * Page Subtitle or description.
 */
const ShellSubtitle = ({ className, size = "xl", variant = "muted", asChild = false, ...props }: TextProps) => (
    <Text asChild={asChild} size={size} variant={variant} className={className} {...props} />
);
ShellSubtitle.displayName = "ShellSubtitle";

/**
 * Wrapper for the main page content.
 */
const ShellContent = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <main className={cn("fluid:w-full", className)} {...props} />
);
ShellContent.displayName = "ShellContent";

/**
 * Main wrapper for page layouts.
 */
const ShellComponent = React.forwardRef<HTMLDivElement, ShellProps>(
    ({ width = "md", children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "fluid:container fluid:mx-auto fluid:px-6 fluid:py-12 fluid:relative fluid:flex fluid:flex-col fluid:gap-0",
                    widths[width],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
ShellComponent.displayName = "Shell";

export const Shell = Object.assign(ShellComponent, {
    Header: ShellHeader,
    Title: ShellTitle,
    Subtitle: ShellSubtitle,
    Content: ShellContent,
    BackLink: ShellBackLink,
});
