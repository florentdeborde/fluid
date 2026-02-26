import * as React from "react";
import { Eye, EyeOff } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";
import type { ComponentSize } from "../types/shared";

const inputVariants = cva(
    "fluid:flex fluid:w-full fluid:rounded-md fluid:border fluid:border-neutral-200 fluid:bg-white fluid:transition-colors fluid:file:border-0 fluid:file:bg-transparent fluid:file:text-sm fluid:file:font-medium fluid:placeholder:text-neutral-500 fluid:focus-visible:outline-none fluid:focus-visible:ring-2 fluid:disabled:cursor-not-allowed fluid:disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "fluid:focus-visible:ring-blue-500",
                error: "fluid:border-red-500 fluid:text-red-900 fluid:focus-visible:ring-red-500",
                success: "fluid:border-green-500 fluid:text-green-900 fluid:focus-visible:ring-green-500",
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

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, variant, size, error, success, onChange, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const [hasFile, setHasFile] = React.useState(false);
        const inputVariant = error ? "error" : success ? "success" : variant;
        const isPassword = type === "password";
        const isFileInput = type === "file";
        const expectedType = type || "text";
        const resolvedPlaceholder = props.placeholder || defaultPlaceholders[expectedType] || undefined;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (isFileInput) {
                setHasFile(!!e.target.files && e.target.files.length > 0);
            }
            if (onChange) {
                onChange(e);
            }
        };

        const inputElement = (
            <input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={resolvedPlaceholder}
                className={cn(
                    inputVariants({ variant: inputVariant, size, className }),
                    isPassword && "fluid:pr-10", // space for the icon
                    isFileInput && !hasFile && "fluid:text-neutral-500" // fade out text when no file is chosen
                )}
                ref={ref}
                aria-invalid={error ? "true" : undefined}
                onChange={handleChange}
                {...props}
            />
        );

        if (isPassword) {
            return (
                <div className="fluid:relative fluid:w-full">
                    {inputElement}
                    <button
                        type="button"
                        className="fluid:absolute fluid:right-3 fluid:top-1/2 fluid:-translate-y-1/2 fluid:text-neutral-500 fluid:hover:text-neutral-700 fluid:focus-visible:outline-none fluid:focus-visible:text-blue-500 fluid:transition-colors fluid:cursor-pointer"
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

        return inputElement;
    }
);
Input.displayName = "Input";

export { Input, inputVariants };
