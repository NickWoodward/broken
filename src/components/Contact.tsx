import { cn } from "../utils/utils";

import { SectionDescription } from "./SectionDescription";
import { SectionIntro } from "./SectionIntro";
import { SectionTitle } from "./SectionTitle";
import { ContactForm } from "./ContactForm";

interface Props {
  className?: string
}

export const Contact = ({className}: Props) => {
  const title = "Get in Touch";
  const description = ["If you are interested in leasing or buying one of SUB1’s data centres, please submit your information and we will contact you"];
  const classes = cn("CONTACT relative py-section-sm gap-16 grid auto-rows-min grid-cols-1 w-full header mx-auto overflow-hidden", className);

  return (
    <div className={classes} id="about">
      <SectionIntro className="">
        <SectionTitle className="text-primaryDark" title={title} />
        <SectionDescription description={description} />
      </SectionIntro>
      <ContactForm />
    </div>  
  
  )
}