import type { ComponentProps } from "react";

import { cn } from "../utils/utils";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { useStore } from "@nanostores/react";
import { $isMenuOpen } from "../stores/store";

interface Props extends ComponentProps<"div"> {
  items: {
    name:string,
    to:string
  }[],
  itemClassName?: string,
  // close: (e:React.MouseEvent) => void,
  // isOpen: boolean,
}

export const MobileMenu = ({className, itemClassName, items}: Props) => {
  const isMenuOpen = useStore($isMenuOpen);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "ease.inOut" },
      // paused:true,
    });

    // const transparentTl = gsap.timeline({
    //   defaults: {duration:0.2, ease: "ease.inOut"},
    //   paused: true,
    // })
    // .to('.menu--mobile', {y:1.15, transformOrigin:'top'});

    // ScrollTrigger.create({
    //   trigger: '.section-1',
    //   start: "1px top",
    //   onEnter: () => transparentTl.play(0),
    //   onLeaveBack: () => transparentTl.reverse()
    // });
  });

  const close = () => {
    $isMenuOpen.set(false);
    console.log(isMenuOpen)
  }

  const classes = cn("menu--mobile relative w-full px-2 py-2.5 pt-[calc(var(--header-height)+.5rem)] sm:hidden fixed inset-x-0 top-0 z-50 origin-top-right transform  transition", className);
  const itemClasses = cn("border-2 border-slate-200 hover:border-primary mobile-menu__item block bg-primaryVLight shadow rounded-md px-5 xs:px-8 py-3.5 text-sm text-center xs:text-left font-medium text-primaryDark hover:bg-slate-700 hover:text-white z-30", itemClassName);

    return (
      isMenuOpen? <div onClick={close} className={classes}>
        <div  className="overlay absolute inset-0 w-full h-[100svh] bg-slate-800 opacity-75"></div>
        <div className="grid grid-cols-2 gap-2 z-30">
          {items.map(({ name, to}) => (
            <a key={name} href={to} data-active={false} className={itemClasses}>{name}</a>
          ))}
        </div>
      </div> : <></>
    )
  
  // return (
  //   <div 
  //     className={classes}
  //   >
  //     <div className="flex flex-col items-end w-full overflow-hidden">
  //       <a href="#about" id="about-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">About</a>

  //       <a href="#why-us" id="why-us-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary">Why Us</a>

  //       <a href="#contact" id="contact-mobile-item" className="mobile-menu__item block w-[120%] bg-slate-600  border-t-2 last:border-b-0 border-slate-700 px-8 py-4 text-base text-right font-medium text-slate-300 hover:bg-slate-700 hover:text-primary ">Contact Us</a>

  //     </div>
  //  </div>
  // )
}