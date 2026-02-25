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
                    "absolute top-6 left-6 inline-flex items-center gap-2 text-neutral-500 no-underline font-semibold transition-all hover:text-neutral-900 hover:-translate-x-1 cursor-pointer",
                    className
                )}
                {...props}
            >
                {asChild ? (
                    children
                ) : (
                    <>
                        {icon || <ArrowLeft className="size-5" />}
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
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-screen-xl",
    full: "max-w-full",
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
                    "container mx-auto px-6 py-12 relative flex flex-col gap-0",
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
    <header className={cn("mb-8 mt-4 flex flex-col gap-2", className)} {...props} />
);
ShellHeader.displayName = "ShellHeader";

/**
 * Main Page Title (H1).
 */
const ShellTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn("text-4xl font-bold tracking-tight text-neutral-900", className)} {...props} />
);
ShellTitle.displayName = "ShellTitle";

/**
 * Page Subtitle or description.
 */
const ShellSubtitle = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("text-xl text-neutral-500", className)} {...props} />
);
ShellSubtitle.displayName = "ShellSubtitle";

/**
 * Wrapper for the main page content.
 */
const ShellContent = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <main className={cn("w-full", className)} {...props} />
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
