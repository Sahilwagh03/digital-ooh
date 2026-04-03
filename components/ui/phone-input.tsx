import * as React from "react";
import { cn } from "@/lib/utils";
import { validatePhone } from "@/lib/validation";
import { CountrySelector } from "./country-selector";
import { COUNTRIES } from "@/lib/countries";

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  value?: string;
  onChange?: (value: string | undefined) => void;
  onValidationChange?: (isValid: boolean) => void;
}

export const PhoneInput = React.forwardRef<
  HTMLInputElement,
  PhoneInputProps
>(
  (
    {
      label,
      error: externalError,
      value,
      onChange,
      onValidationChange,
      className,
      placeholder,
      ...props
    },
    ref
  ) => {
    const [internalError, setInternalError] = React.useState<string | null>(
      null
    );
    const [country, setCountry] = React.useState("IN"); // Default to India

    const error = externalError || internalError;
    const isValid = !error && value;
    const selectedCountry = COUNTRIES.find((c) => c.code === country);
    const dynamicPlaceholder = placeholder || selectedCountry?.placeholder || "Enter your number";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value;

      // Only allow numbers and valid phone characters
      inputValue = inputValue.replace(/[^\d\s\-\+()]/g, "");

      // Run validation if value exists
      if (inputValue) {
        // Combine dial code with number for validation
        const fullNumber = `${selectedCountry?.dialCode} ${inputValue}`.trim();
        const validationError = validatePhone(fullNumber);
        setInternalError(validationError);
        onValidationChange?.(validationError === null);
      } else {
        setInternalError(null);
        onValidationChange?.(false);
      }

      onChange?.(inputValue);
    };

    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <span className="text-sm text-neutral-500 font-semibold">
            {label}
          </span>
        )}

        <div
          className={cn(
            "flex items-center h-11 rounded-lg border border-input bg-transparent transition-colors gap-0",
            error && "border-red-500"
          )}
        >
          <CountrySelector
            value={country}
            onValueChange={(code) => setCountry(code)}
          />

          <div className="h-6 w-px bg-input mx-0" />

          <input
            ref={ref}
            type="tel"
            value={value}
            onChange={handleChange}
            placeholder={dynamicPlaceholder}
            className={cn(
              "flex-1 h-11 px-3 py-2 bg-transparent text-base outline-none border-0 placeholder:text-muted-foreground focus-visible:outline-none",
              className
            )}
            {...props}
          />
        </div>

        {error && (
          <p className="text-xs text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";
