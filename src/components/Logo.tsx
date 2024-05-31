import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { cva } from "class-variance-authority";

interface Props extends ComponentProps<"div"> {
  size?: "sm" | "md" | "lg",
  dark?: boolean
}

const logoVariants = cva("border-l-2 border-primary  ", {
  variants: {
    size: {
      sm: "text-2xl",
      md: "text-3xl",
      lg: "text-4xl",
    },
  },
  defaultVariants: {
    size: "md",
  }
});

export const Logo = ({className, size = "md", dark = false}: Props) => {
  const classes = cn("logo-wrapper", className);

  return (
    <a href="/#hero" className={classes}>
      <div
        data-dark={dark}
        className={ cn("logo data-[dark='true']:text-textDark pl-3 text-white tracking-tighter uppercase", logoVariants({ size }))}>
        SUBB
        <span className={cn("text-primary",
          size==="sm" && "ml-2",
          size==="md" &&  "ml-2",
        )}>1</span>
      </div>
    </a>
  );
}