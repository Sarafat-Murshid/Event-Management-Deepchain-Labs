import * as React from "react";
import { cn } from "../../lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-[#242565] font-geist">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              "flex h-9 w-full appearance-none rounded-md border border-[#E5E9EB] bg-white px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-1 focus:ring-[#7B8BFF] disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            ref={ref}
            {...props}
          >
            <option value="" disabled>
              Select an option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M17 10L12 15L7 10"
                stroke="#242565"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
