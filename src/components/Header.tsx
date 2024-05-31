import { type ComponentProps } from "react";
import theme from '../styles/theme'; 
 
import { gsap } from "gsap";   
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  dark?: boolean;
  transparent?: boolean;
  page: "home" | "datacentres";
}

export const Header = ({children, className, dark, page, transparent}: Props) => {
  const { screens: {sm,lg} }  = theme;

  // const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    const tl = gsap.timeline({
      defaults: {duration:0.2, ease: "ease.inOut"},
      paused: true,
    });
console.log(page);
    mm.add(`(max-width: ${lg})`, () => {
      if(dark) {
        tl
        .to('.header-bg', {opacity:1, scaleY:.85, transformOrigin:'top', backgroundColor:"#334155"})
        .to('.logo-wrapper', {scale:.85, transformOrigin:'top left'}, "<")
        .to('.nav', {scale:.85, transformOrigin:'top right'}, "<")
      } else {
        tl
        .to('.header-bg', {scaleY:.85, transformOrigin:'top', backgroundColor:"#334155"})
        .to('.logo-wrapper', {scale:.85, transformOrigin:'top left'}, "<")
        .to('.logo', {color:"#fff"}, "<")
        .to('.nav', {scale:.85, transformOrigin:'top right'}, "<")
        .to('.nav a', {color: 'white'}, "<");
      }  
    })

    mm.add(`(min-width: ${lg})`, () => {
      if(dark) {
        tl
        .to('.header-bg', {opacity:1, scaleY:.85, transformOrigin:'top'})
        .to('.logo-wrapper', {scale:.85, transformOrigin:'top left'}, "<")
        // .to('.logo', {color:"#fff"}, "<")
        .to('.nav', {scale:.85, transformOrigin:'top right'}, "<");
    
      } else {
        tl
        .to('.header-bg', {scaleY:.85, transformOrigin:'top'})
        .to('.logo-wrapper', {scale:.85, transformOrigin:'top left'}, "<")
        // .to('.logo', {color:"#fff"}, "<")
        .to('.nav', {scale:.85, transformOrigin:'top right', color:'red'}, "<")
        // .to('.nav a', {color:'red'}, "<");
      }  
    })
 
    ScrollTrigger.create({
      trigger: '.section-1',
      start: "1px top",
      onEnter: () => tl.play(0),
      onLeaveBack: () => tl.reverse()
    });
  }, {
    // scope: container,
    dependencies: [dark],
    revertOnUpdate: true
  });
  
  const classes = cn("fixed z-[60]", className);
  return (
    <div 
    className={classes}>
      {children}
    </div>
  )
}