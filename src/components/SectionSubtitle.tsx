import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  subtitle: string
}

export const SectionSubtitle = ({className, subtitle}: Props) => {
  const classes = cn("strapline text-base font-medium text-primary", className);
  return (
    <h2 className={classes}>{subtitle}</h2>
  )
}