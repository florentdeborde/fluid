import * as React from "react";
import { cn } from "../../utils/cn";

export interface FieldContextValue {
    id: string;
}

const FieldContext = React.createContext<FieldContextValue | undefined>(undefined);

export const useFieldContext = () => React.useContext(FieldContext);

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Unique ID for the field, if not provided one will be generated */
    id?: string;
}

/**
 * A container component that provides context for labels and inputs to link them.
 */
export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
    ({ children, className, id, ...props }, ref) => {
        const generatedId = React.useId();
        const finalId = id || generatedId;

        return (
            <FieldContext.Provider value={{ id: finalId }}>
                <div
                    ref={ref}
                    className={cn("fluid:flex fluid:flex-col fluid:gap-2 fluid:w-full", className)}
                    {...props}
                >
                    {children}
                </div>
            </FieldContext.Provider>
        );
    }
);

Field.displayName = "Field";
