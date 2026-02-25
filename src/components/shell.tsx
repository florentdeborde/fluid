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

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    /** The main title of the page */
    title?: string;
    /** A secondary description or subtitle */
    subtitle?: string;
    /** Max width of the content container */
    containerSize?: "sm" | "md" | "lg" | "xl" | "full";
    /** The path or URL to go back to. Providing this will show the back link. */
    backTo?: string;
    /** Label for the back link */
    backLabel?: string;
    /** Slot for an optional SEO component */
    seo?: React.ReactNode;
    /** Page content */
    children: React.ReactNode;
}

const containerSizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-(--breakpoint-xl)",
    full: "max-w-full",
};

const Shell = React.forwardRef<HTMLDivElement, ShellProps>(
    ({ title, subtitle, containerSize = "md", backTo, backLabel, seo, children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "container mx-auto px-6 py-12 relative",
                    containerSizes[containerSize],
                    className
                )}
                {...props}
            >
                {seo}

                {backTo && (
                    <ShellBackLink backTo={backTo} label={backLabel} />
                )}

                <main className="w-full">
                    {(title || subtitle) && (
                        <header className="mb-8 mt-4">
                            {title && (
                                <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-2">
                                    {title}
                                </h1>
                            )}
                            {subtitle && (
                                <div className="text-xl text-neutral-500">
                                    {subtitle}
                                </div>
                            )}
                        </header>
                    )}
                    {children}
                </main>
            </div>
        );
    }
);
Shell.displayName = "Shell";

export { Shell, ShellBackLink };
