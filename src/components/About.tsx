import type { ComponentProps, ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import theme from '../styles/theme'; 

import { cn } from "../utils/utils";

import { AboutCard } from "./AboutCard";

interface Props {
  className?: string,
  solarIcon?: ReactNode,
  settingsIcon?: ReactNode,
  recycleIcon?: ReactNode
}

export const About = ({className, solarIcon, settingsIcon, recycleIcon}: Props) => {
  const { screens: {lg} }  = theme;

  const cards = [
    {
      id: 1,
      cardImage: solarIcon,
      cardTitle: "Onsite Generation",
      cardDescription: "The reduced mechanical load leverages renewable energy generated onsite"
    },
    {
      id: 2,
      cardImage: settingsIcon,
      cardTitle: "No Compressors",
      cardDescription: "Compressorless cooling via evaporative free-air system, with optional direct liquid cooling"
    },
    {
      id: 3,
      cardImage: recycleIcon,
      cardTitle: "No Fossil Fuels",
      cardDescription: "Resilient and sustainable back-up generator sets, 100% powered by HVO"
    },
  ];

useGSAP(() => {
  const cards = gsap.utils.toArray<HTMLElement>('.card');
  
  let mm = gsap.matchMedia();

  mm.add(`(max-width: ${lg})`, () => {
    cards.forEach((card, index)=> {
      const distance = index % 2 === 0 ? 4:-4;
      const tl = gsap.timeline({paused:true});
  
      tl.from(card, {
        autoAlpha: 0,
        xPercent: gsap.utils.wrap([-distance, distance, -distance]),
        ease:'power4.inOut"',
        duration: .4,
        immediateRender:false
      });
      
      // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        // markers:true,
        onEnter: () => tl.play(),
        // onLeaveBack: () => tl.pause(0)
  
      });
      ScrollTrigger.create({
        trigger: card,
        start: "top 110%",
        // markers:true,
        onLeaveBack: () => tl.pause(0)
      });
    });
  
  });
  mm.add(`(min-width: ${lg})`, () => {
      const tl = gsap.timeline({paused:true});
  
      tl.from('.card', {
        autoAlpha: 0,
        xPercent: -7,
        ease:'power4.inOut"',
        duration: .4,
        immediateRender:false,
        stagger: 0.35
      });
      
      // Separate scrolltrigger objects allow leaveback and onenter trigger points to be different
      ScrollTrigger.create({
        trigger: '.card',
        start: "top 80%",
        // markers:true,
        onEnter: () => tl.play(),
        // onLeaveBack: () => tl.pause(0)
  
      });
      // ScrollTrigger.create({
      //   trigger: '.card',
      //   start: "top 90%",
      //   markers:true,
      //   onLeaveBack: () => tl.pause(0)
      // });
  
  });

});

  const classes = cn("relative gap-y-16 flex  w-full", className);

  return (
    <div className={classes}>

      <div className="cards grid gap-y-16 gap-x-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {
          cards.map(card => {
            return <AboutCard key={card.id} cardTitle={card.cardTitle} cardDescription={card.cardDescription} cardImage={card.cardImage} />
          })
        }
        <div className=" hidden md:flex  lg:hidden md:flex-col md:justify-self-center md:self-center md:gap-y-8 md:py-3 md:w-3/4 md:justify-center  md:text-white text-base font-semibold ">
          <div className="flex md:mx-auto justify-center font-normal text-lg text-gray-500">Contact us to find out more</div>
          <a href="#contact" className="about-button md:flex md:text-center md:mx-auto md:justify-center  md:py-3 md:rounded-lg  md:bg-primary font-medium w-[300px]">Get in Touch</a>
        </div>
		    {/* <Button className="hidden md:flex mx-auto -mt-4 xs:mr-0 xs:ml-auto md:mr-auto md:ml-auto w-full xs:w-1/2  col-start-2 col-span-3 xs:col-start-3 xs:col-span-1 py-3 pl-4 pr-4 text-base font-semibold max-w-prose "  rounded size="md">Get in Touch</Button> */}
      </div>
    </div>
  )
}
