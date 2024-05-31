import type { ComponentProps } from "react"
import { cn } from "../utils/utils"

interface Props extends ComponentProps<"div"> {}

export const HeroContent = ({className, content}: Props) => {
  const classes = cn("content -translate-y-2 text-lg text-slate-200  xs:text-xl lg:text-lg lg:text-gray-500 xl:text-xl", className)
  return (
    <div className={classes}>                  
      {content}
    </div>
  )
}