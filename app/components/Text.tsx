import clsx from "clsx";

import { missingClass, formatText } from "~/lib/utils";

export function Text({
  as: Component = "span",
  className,
  color = "default",
  format,
  size = "copy",
  width = "default",
  children,
  ...props
}: {
  as?: React.ElementType;
  className?: string;
  color?: "default" | "primary" | "subtle" | "notice" | "contrast";
  format?: boolean;
  size?: "lead" | "copy" | "fine";
  width?: "default" | "narrow" | "wide";
  children: React.ReactNode;
  [key: string]: any;
}) {
  const colors: Record<string, string> = {
    default: "inherit",
    primary: "text-primary/90",
    subtle: "text-primary/50",
    notice: "text-notice",
    contrast: "text-contrast/90",
  };

  const sizes: Record<string, string> = {
    lead: "text-lead font-medium",
    copy: "text-copy",
    fine: "text-fine subpixel-antialiased",
  };

  const widths: Record<string, string> = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide",
  };

  const styles = clsx(
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "text-") && colors[color],
    sizes[size],
    className
  );

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  );
}

export function Heading({
  as: Component = "h2",
  children,
  className = "",
  format,
  size = "heading",
  width = "default",
  ...props
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  format?: boolean;
  size?: "display" | "heading" | "lead" | "copy";
  width?: "default" | "narrow" | "wide";
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const sizes = {
    display: "font-bold text-display",
    heading: "font-bold text-heading",
    lead: "font-bold text-lead",
    copy: "font-medium text-copy",
  };

  const widths = {
    default: "max-w-prose",
    narrow: "max-w-prose-narrow",
    wide: "max-w-prose-wide",
  };

  const styles = clsx(
    missingClass(className, "whitespace-") && "whitespace-pre-wrap",
    missingClass(className, "max-w-") && widths[width],
    missingClass(className, "font-") && sizes[size],
    className
  );

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  );
}
