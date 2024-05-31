import type { ReactNode } from "react";
import { cn } from "../utils/utils";
import { Button } from "./Button";
import { SectionDescription } from "./SectionDescription";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";

interface Props {
  className?: string;
  children?: ReactNode
}

export const WhyUs = ({className, children}: Props) => {



  const classes = cn("relative py-section-sm gap-16 grid auto-rows-min grid-cols-1 w-full header mx-auto overflow-hidden", className);
  return (
    <div className={classes}>
      {/* <SectionIntro className="">
        <SectionTitle className="text-primaryDark" title={title} />
        <SectionDescription className="text-white" description={description} />
      </SectionIntro> */}


    </div>
  )
}