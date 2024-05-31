import type { ComponentProps } from "react"
import { cn } from "../utils/utils";
// import ThemeIcon from './ThemeIcon.astro';

interface Props extends ComponentProps<"div"> {
  items: {
    name:string,
    to:string
  }[],
  itemClassName?: string,
  dark?: boolean,
}

export const DesktopMenu = ({className, itemClassName, items, dark}: Props) => {
  const classes = cn("menu--desktop hidden sm:flex space-x-4  text-sm font-medium text-gray-300 ", className);
  const itemClasses = cn("px-3 py-2  data-[dark=false]:text-gray-300 data-[dark=true]:text-textDark data-[active=true]:text-primary hover:bg-primary hover:rounded-md hover:text-white", itemClassName);
  return (
    <div className={classes}>
      {items.map(({ name, to}) => (
        <a key={name} href={to} data-active={false} data-dark={dark} className={itemClasses}>{name}</a>
      ))}
    </div>
  )
}