import { cn } from "../utils/utils";
import { FooterMenu } from "./FooterMenu"
import { Logo } from "./Logo"
import { SocialLinks } from "./SocialLinks"

export const Footer = ({className}:{className:string}) => {
  const classes = cn("w-full bg-slate-700 py-6", className);
  return (
    <footer className={classes} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="relative grid grid-cols-2 gap-y-2 px-md  max-w-[1600px] mx-auto">
        <Logo size="sm" className="" />
        <p className="hidden xs:flex items-center xs:items-start col-start-1 row-start-2  text-base text-gray-200">Hyper-Efficient Edge Data Centres</p>
        <FooterMenu className="col-start-2 row-start-1 row-span-2 sm:row-span-1 xs:row-start-2 sm:row-start-1 xs:-translate-y-1 sm:translate-y-0 justify-center sm:justify-end xs:justify-start sm:items-center" />
        <SocialLinks className="xs:justify-end xs:items-end col-start-1 xs:col-start-2 xs:row-start-1 sm:row-start-2 sm:translate-y-1.5" />
        <p className="flex xs:items-end col-span-2 col-start-1 xs:row-start-3 text-xs text-gray-200 md:text-center">&copy; {new Date().getFullYear()} SUB1.<br className="md:hidden" /> All rights reserved.</p>
      </div>
        
    </footer>

  )
}