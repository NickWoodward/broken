import type { ComponentProps } from "react"
import { cn } from "../utils/utils"
import { Button } from "./Button"
import { $isPrivacyMenuOpen } from "../stores/store"
import { useStore } from "@nanostores/react"

interface Props extends ComponentProps<"div">{}

export const FooterMenu = ({ className }: Props) => {
  const isPrivacyMenuOpen = useStore($isPrivacyMenuOpen);
  const openPrivacyPolicy = () => {
    $isPrivacyMenuOpen.set(!isPrivacyMenuOpen);
  }

  const classes = cn("flex flex-col text-left sm:text-right sm:flex-row sm:space-x-6 space-y-0.5 text-sm text-gray-200", className)
  return (    
    <div className={classes}>
      <a href="/#about" className="hover:text-gray-200 text-right cursor-pointer">About</a>
      <a href="/#why-us" className="hover:text-gray-200 text-right cursor-pointer">Why Us</a>
      <Button onClick={openPrivacyPolicy} variant="ghost" className="privacy-link--footer justify-end hover:text-gray-200  cursor-pointer">Privacy Policy</Button>
    </div>
  )
}