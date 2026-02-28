import * as React from "react";
import { cn } from "../../utils/cn";
import { useFieldContext } from "../form/field";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /** 
     * If true, adds a required indicator (*) to the label.
     */
    required?: boolean;
}

/**
 * A semantic label component that automatically links to a field's ID.
 */
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, children, htmlFor, required, ...props }, ref) => {
        const fieldContext = useFieldContext();
        const finalHtmlFor = htmlFor || fieldContext?.id;

        return (
            <label
                ref={ref}
                htmlFor={finalHtmlFor}
                className={cn(
                    "fluid:text-sm fluid:font-medium fluid:leading-none fluid:text-neutral-900 fluid:dark:text-neutral-100 fluid:peer-disabled:cursor-not-allowed fluid:peer-disabled:opacity-70",
                    className
                )}
                {...props}
            >
                {children}
                {required && (
                    <span className="fluid:ml-1 fluid:text-red-500" aria-hidden="true">
                        *
                    </span>
                )}
            </label>
        );
    }
);

Label.displayName = "Label";
