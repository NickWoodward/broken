import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  title: string
}

export const SectionTitle = ({className, title}: Props) => {
  const classes = cn("headline mt-2 text-2xl xxs:text-3xl font-semibold tracking-tight text-slate-700", className);
  
  return (
    <h1 className={classes}>{title}</h1>
  )
}