import type { ComponentProps } from "react";
import { cn } from "../utils/utils";
import { useGSAP } from "@gsap/react";
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";


interface Props extends ComponentProps<"div"> {}

export const SectionIntro = ({className, children}: Props) => {
  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     paused: true, 
  //     defaults: {
  //       duration: .4, 
  //       autoAlpha: 0, 
  //       markers: true,
  //       ease: 'power.in'
  //     }
  //   }).from('.strapline', {
  //     y:10
  //   }).from('.headline', {
  //     y:10
  //   }, '<.1').from('.description', {
  //     y:10
  //   }, '<.1');

  //   ScrollTrigger.create({
  //     trigger: ".strapline",
  //     start: "top 80%",
  //     // markers:true,
  //     onEnter: () => {tl.play()}
  //   });
  
  //   ScrollTrigger.create({
  //     trigger: '.strapline',
  //     start: "top 110%",
  //     // markers:true,
  //     onLeaveBack: () => tl.pause(0)
  //   });
  // });

  const classes = cn("INTRO relative max-w-2xl   ", className);
  return (
    <div  className={classes}>
      {children}
    </div>
  )
}