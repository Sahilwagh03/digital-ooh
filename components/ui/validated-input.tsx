import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

interface ValidatedInputProps
  extends React.ComponentProps<typeof Input> {
  label?: string;
  error?: string;
  validator?: (value: string) => string | null;
  onValidationChange?: (isValid: boolean) => void;
}

export const ValidatedInput = React.forwardRef<
  HTMLInputElement,
  ValidatedInputProps
>(
  (
    {
      label,
      error: externalError,
      validator,
      onValidationChange,
      value,
      onChange,
      className,
      ...props
    },
    ref
  ) => {
    const [internalError, setInternalError] = React.useState<string | null>(
      null
    );

    const error = externalError || internalError;
    const isValid = !error && value;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Run validation if validator provided
      if (validator) {
        const validationError = validator(newValue);
        setInternalError(validationError);
        onValidationChange?.(validationError === null);
      }

      onChange?.(e);
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <span className="text-sm text-neutral-500 font-semibold">
            {label}
          </span>
        )}

        <Input
          ref={ref}
          value={value}
          onChange={handleChange}
          aria-invalid={!!error}
          className={cn(
            error && "border-red-500 focus-visible:ring-red-500/20",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-xs text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

ValidatedInput.displayName = "ValidatedInput";
