import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import type { ComponentSize } from "../types/shared";

const inputVariants = cva(
    "fluid:flex fluid:w-full fluid:rounded-md fluid:border fluid:border-neutral-200 fluid:bg-white fluid:dark:border-neutral-700 fluid:dark:bg-neutral-900 fluid:dark:text-neutral-100 fluid:transition-colors fluid:file:border-0 fluid:file:bg-transparent fluid:file:text-sm fluid:file:font-medium fluid:placeholder:text-neutral-500 fluid:dark:placeholder:text-neutral-400 fluid:focus-visible:outline-none fluid:focus-visible:ring-2 fluid:disabled:cursor-not-allowed fluid:disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "fluid:focus-visible:ring-blue-500",
                error: "fluid:border-red-500 fluid:text-red-900 fluid:focus-visible:ring-red-500 fluid:dark:border-red-500/50 fluid:dark:text-red-400",
                success: "fluid:border-green-500 fluid:text-green-900 fluid:focus-visible:ring-green-500 fluid:dark:border-green-500/50 fluid:dark:text-green-400",
            },
            size: {
                md: "fluid:h-10 fluid:px-3 fluid:py-2 fluid:text-sm",
                sm: "fluid:h-9 fluid:px-2.5 fluid:py-1 fluid:text-xs",
                lg: "fluid:h-12 fluid:px-4 fluid:py-3 fluid:text-base",
            }
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'>,
    VariantProps<typeof inputVariants> {
    /** 
     * Defines the type of the input field.
     */
    type?: React.HTMLInputTypeAttribute;
    /**
     * The scale size of the input field.
     */
    size?: ComponentSize;
    /** 
     * If true, applies the error styling and sets aria-invalid="true" 
     * for accessibility purposes.
     */
    error?: boolean;
    /** 
     * If true, applies the success styling.
     */
    success?: boolean;
}

const defaultPlaceholders: Record<string, string> = {
    email: "you@example.com",
    url: "https://example.com",
    search: "Search...",
    tel: "+33 6 00 00 00 00",
    password: "Enter password",
    text: "Enter text",
    number: "Enter number",
};

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant, size, error, success, ...props }, ref) => {
        const inputVariant = error ? "error" : success ? "success" : variant;
        const expectedType = type || "text";
        const resolvedPlaceholder = props.placeholder || defaultPlaceholders[expectedType] || undefined;

        return (
            <input
                type={type}
                placeholder={resolvedPlaceholder}
                className={cn(
                    inputVariants({ variant: inputVariant, size, className })
                )}
                ref={ref}
                aria-invalid={error ? "true" : undefined}
                {...props}
            />
        );
    }
);
InputComponent.displayName = "Input";

/* -------------------------------------------------------------------------- */
/*                                Input Password                              */
/* -------------------------------------------------------------------------- */

export interface InputPasswordProps extends InputProps { }

/**
 * A specialized Input for passwords with a visibility toggle.
 */
const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
    ({ className, variant, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const inputVariant = variant || "password";

        return (
            <div className="fluid:relative fluid:w-full">
                <InputComponent
                    type={showPassword ? "text" : "password"}
                    variant={inputVariant as any}
                    className={cn("fluid:pr-10", className)}
                    ref={ref}
                    {...props}
                />
                <button
                    type="button"
                    className="fluid:absolute fluid:right-3 fluid:top-1/2 fluid:-translate-y-1/2 fluid:text-neutral-500 fluid:hover:text-neutral-700 fluid:dark:hover:text-neutral-300 fluid:focus-visible:outline-none fluid:focus-visible:text-blue-500 fluid:transition-colors fluid:cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                >
                    {showPassword ? (
                        <EyeOff className="fluid:size-4.5" />
                    ) : (
                        <Eye className="fluid:size-4.5" />
                    )}
                </button>
            </div>
        );
    }
);
InputPassword.displayName = "Input.Password";

export const Input = Object.assign(InputComponent, {
    Password: InputPassword,
});

export { inputVariants };
