"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { COUNTRIES } from "@/lib/countries";
import { ChevronDown, Search, X } from "lucide-react";

interface CountrySelectorProps {
  value: string;
  onValueChange: (code: string) => void;
}

export const CountrySelector = React.forwardRef<
  HTMLButtonElement,
  CountrySelectorProps
>(({ value, onValueChange }, ref) => {
  const [open, setOpen] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const selectedCountry = COUNTRIES.find((c) => c.code === value);

  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm)
  );

  const handleSelect = (code: string) => {
    onValueChange(code);
    setOpen(false);
    setSearchTerm("");
    setHighlightedIndex(0);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        setOpen(true);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredCountries.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCountries[highlightedIndex]) {
          handleSelect(filteredCountries[highlightedIndex].code);
        }
        break;
      case "Escape":
        e.preventDefault();
        setOpen(false);
        setSearchTerm("");
        setHighlightedIndex(0);
        break;
    }
  };

  return (
    <div className="relative w-fit">
      {/* Trigger */}
      <button
        ref={ref}
        onClick={() => setOpen(!open)}
        onKeyDown={handleKeyDown}
        className={cn(
          "h-11 px-3 py-2 rounded-l-lg bg-transparent flex items-center gap-2 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          open && "ring-2 ring-ring"
        )}
        type="button"
      >
        <span className="text-sm font-medium text-foreground min-w-fit">
          {selectedCountry?.dialCode}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => {
              setOpen(false);
              setSearchTerm("");
              setHighlightedIndex(0);
            }}
          />

          {/* Dropdown */}
          <div className="absolute top-full left-0 z-50 w-72 mt-2 bg-popover text-popover-foreground rounded-lg border border-border shadow-md overflow-hidden">
            {/* Search */}
            <div className="p-3 border-b border-border bg-muted">
              <div className="relative flex items-center">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search country..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setHighlightedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  className="w-full pl-9 pr-3 py-2 h-9 rounded-md border border-input bg-background text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                {searchTerm && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setHighlightedIndex(0);
                    }}
                    className="absolute right-3 p-1 hover:bg-accent rounded"
                  >
                    <X className="h-3 w-3 text-muted-foreground" />
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="max-h-32 overflow-y-auto">
              {filteredCountries.length === 0 ? (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No countries found
                </div>
              ) : (
                filteredCountries.map((country, index) => (
                  <button
                    key={country.code}
                    onClick={() => handleSelect(country.code)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      "w-full px-4 py-3 flex items-center gap-3 text-left text-sm transition-colors",
                      index === highlightedIndex
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent text-foreground",
                      value === country.code &&
                        "bg-muted border-l-2 border-primary"
                    )}
                    type="button"
                  >
                    <span className="text-lg">{country.flag}</span>
                    <div className="flex-1">
                      <div className="font-medium">{country.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {country.code} • {country.dialCode}
                      </div>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
});

CountrySelector.displayName = "CountrySelector";