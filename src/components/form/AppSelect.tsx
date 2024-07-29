'use client'

import { AppInputProps } from "./AppInput";

export type AppSelectOption = {
  title: string;
  value: string;
};

export type AppSelectProps = Omit<AppInputProps, "placeholder"> & {
  options: (string| AppSelectOption)[];
  variant?: "app-select" | "app-select-underline";
};

export default function AppSelect({ name, title, options, value, readonly, onChange, error: fieldError, variant = "app-select" }: AppSelectProps) {
  return (
    <div>
      {title &&
        <label htmlFor={`${title}-select`} className="inline-block pb-1 text-black-300 font-switzer [&_option]:font-switzer text-base">
          {title}
        </label>}
      <select
        onChange={(e) => onChange?.(e.target.value)}
        disabled={readonly} defaultValue={value} name={name} id={`${title}-select`} className={variant}>
        {options.map((item, index) => {
          if (typeof item === "string")
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          else
            return (
              <option key={index} value={item.value}>
                {item.title}
              </option>
            );
        })}
      </select>{fieldError && fieldError.length > 0 && (
        <p className="text-red-900 text-xs">{fieldError[0]}</p>
      )}
    </div>
  );
}
