import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ArrowLeft } from "lucide-react";
import { cn } from "../utils/cn";

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
                    "fluid:absolute fluid:top-6 fluid:left-6 fluid:inline-flex fluid:items-center fluid:gap-2 fluid:text-neutral-500 fluid:no-underline fluid:font-semibold fluid:transition-all fluid:hover:text-neutral-900 fluid:hover:-translate-x-1 fluid:cursor-pointer",
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

const containerSizes = {
    sm: "fluid:max-w-3xl",
    md: "fluid:max-w-5xl",
    lg: "fluid:max-w-7xl",
    xl: "fluid:max-w-screen-xl",
    full: "fluid:max-w-full",
};

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Max width of the content container */
    containerSize?: keyof typeof containerSizes;
}

/**
 * Main wrapper for page layouts.
 */
const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
    ({ containerSize = "md", children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "fluid:container fluid:mx-auto fluid:px-6 fluid:py-12 fluid:relative fluid:flex fluid:flex-col fluid:gap-0",
                    containerSizes[containerSize],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);
Shell.displayName = "Shell";

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
const ShellTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("fluid:text-4xl fluid:font-bold fluid:tracking-tight fluid:text-neutral-900", className)} {...props} />
);
ShellTitle.displayName = "ShellTitle";

/**
 * Page Subtitle or description.
 */
const ShellSubtitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("fluid:text-xl fluid:text-neutral-500", className)} {...props} />
);
ShellSubtitle.displayName = "ShellSubtitle";

/**
 * Wrapper for the main page content.
 */
const ShellContent = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <main className={cn("fluid:w-full", className)} {...props} />
);


ShellContent.displayName = "ShellContent";

export {
    Shell,
    ShellHeader,
    ShellTitle,
    ShellSubtitle,
    ShellContent,
    ShellBackLink
};
