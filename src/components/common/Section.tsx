"use client";

import { ReactNode } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  center?: boolean; // centra textos
  className?: string;
  children: ReactNode;
};

export default function Section({
  title,
  subtitle,
  center = false,
  className = "",
  children,
}: Props) {
  return (
    <section className={`container-max py-12 lg:py-20 ${className}`}>
      {(title || subtitle) && (
        <header
          className={`mb-8 ${center ? "text-center max-w-2xl mx-auto" : ""}`}
        >
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-400">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
