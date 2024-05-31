import { Fragment } from "react";
import { cn } from "../utils/utils";

interface Props {
  className?: string,
  description?: string[],
  children?: React.ReactNode
}

export const SectionDescription = ({description, className, children}: Props) => {
  const classes = cn("description flex flex-col gap-y-3 mt-5 max-w-prose text-lg xl:text-xl text-gray-500", className);

  return (
    <>
      {
        children? <div className={classes}>{children}</div> : description?.map((content, index) => {
          return <p key={index} className={classes}>
            {content}
          </p>
        })}
    </>
  )
}