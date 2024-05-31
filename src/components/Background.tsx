import { cn } from "../utils/utils";

interface Props {
  className?: string;
}

export const Background = ({ className }: Props) => {
  const classes = cn("bg-slate-700 ", className);
  return <div className={classes}></div>
}