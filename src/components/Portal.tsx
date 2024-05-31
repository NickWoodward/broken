import { cn } from "../utils/utils"

interface Props {
  className: string;
  id?: string;
}
export const Portal = (props:Props) => {
  const {className} = props;
  const classes = cn("", className);
  return <div {...props} className="portal absolute inset-0  z-50" ></div>
}