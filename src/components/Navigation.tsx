
import { useStore } from "@nanostores/react"; 
import { $isMenuOpen } from "../stores/store";

import { DesktopMenu } from "./DesktopMenu"
import { MobileBurger } from "./MobileBurger"
import { MobileMenu } from "./MobileMenu"
import { cn } from "../utils/utils";

interface Props {
  className?: string,
  dark?: boolean,
  onClick?: () => void;
}

export const Navigation = ({className, onClick = () => {}, dark}:Props) => {
  const isMenuOpen = useStore($isMenuOpen);

  const navItems = [
    {name: "About", to: "/#about"},
    {name: "Why Us", to: "/#why"},
    {name: "Contact", to: "/#contact"},
    {name: "Data Centres", to: "/datacentres"},

  ];
  const toggleMenu = () => {
    console.log('Toggle in Nav');
    $isMenuOpen.set(!isMenuOpen);
  }
  const classes = cn("nav", className);
  const mobileItemClasses = "cursor-pointer";
  const desktopItemClasses = "cursor-pointer";

  return <div className={classes}>
    <MobileBurger isOpen={isMenuOpen} toggleMenu={toggleMenu} /> 
    {/* {
      isMenuOpen && 
      <MobileMenu close={toggleMenu} isOpen={isMenuOpen} items={navItems} itemClassName={mobileItemClasses}  />
    } */}
    <DesktopMenu dark={!dark} items={navItems} itemClassName={desktopItemClasses} />
  </div>
}