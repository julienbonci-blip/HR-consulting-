"use client";

import type { ChangeEvent } from "react";

export function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-display text-lg font-bold text-ink"
    >
      {children}
    </label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-[#a6512f]">
      {message}
    </p>
  );
}

export function TwoChoiceToggle({
  name,
  options,
  value,
  onChange,
}: {
  name: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div role="radiogroup" className="grid grid-cols-2 gap-3">
      {options.map((option) => {
        const active = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`rounded-md border px-5 py-4 text-left text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive ${
              active
                ? "border-olive bg-olive text-paper"
                : "border-mineral bg-paper text-ink hover:border-ink-faint"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export function RadioOptionGroup({
  name,
  options,
  value,
  onChange,
  columns = 1,
}: {
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  columns?: 1 | 2;
}) {
  return (
    <div
      role="radiogroup"
      className={`grid gap-2.5 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}
    >
      {options.map((option) => {
        const active = value === option;
        const id = `${name}-${option}`;
        return (
          <label
            key={option}
            htmlFor={id}
            className={`flex cursor-pointer items-center rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
              active
                ? "border-olive bg-olive text-paper"
                : "border-mineral bg-paper text-ink-soft hover:border-ink-faint"
            }`}
          >
            <input
              type="radio"
              id={id}
              name={name}
              value={option}
              checked={active}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}

export function CheckboxOptionGroup({
  name,
  options,
  values,
  onChange,
  columns = 1,
}: {
  name: string;
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
  columns?: 1 | 2;
}) {
  const toggle = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((v) => v !== option));
    } else {
      onChange([...values, option]);
    }
  };

  return (
    <div
      role="group"
      className={`grid gap-2.5 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}
    >
      {options.map((option) => {
        const active = values.includes(option);
        const id = `${name}-${option}`;
        return (
          <label
            key={option}
            htmlFor={id}
            className={`flex cursor-pointer items-center rounded-md border px-4 py-3 text-sm font-medium transition-colors ${
              active
                ? "border-olive bg-olive text-paper"
                : "border-mineral bg-paper text-ink-soft hover:border-ink-faint"
            }`}
          >
            <input
              type="checkbox"
              id={id}
              name={name}
              checked={active}
              onChange={() => toggle(option)}
              className="sr-only"
            />
            {option}
          </label>
        );
      })}
    </div>
  );
}

export function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-3 w-full rounded-md border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-olive focus:outline-none ${
          error ? "border-[#a6512f]" : "border-mineral"
        }`}
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  value,
  onChange,
  placeholder,
  error,
  minLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  minLength?: number;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`mt-3 w-full rounded-md border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint focus:border-olive focus:outline-none ${
          error ? "border-[#a6512f]" : "border-mineral"
        }`}
      />
      {typeof minLength === "number" && (
        <p className="mt-1.5 text-xs text-ink-faint">
          {value.trim().length}/{minLength} caractères minimum
        </p>
      )}
      <FieldError id={errorId} message={error} />
    </div>
  );
}
