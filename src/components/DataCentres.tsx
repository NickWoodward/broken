import type { ReactNode } from "react";

import { cn } from "../utils/utils";
import { SectionIntro } from "./SectionIntro";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionDescription } from "./SectionDescription";
import { DataCentreCard } from "./DataCentreCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "./Button";

interface Props {
  className?: string,
  watford?: ReactNode,
  harlow?: ReactNode,
  bergen?: ReactNode,
}

export const DataCentres = ({className, watford, harlow, bergen}: Props) => {

  useGSAP(() => {
    const cardItems = gsap.utils.toArray<HTMLElement>('.card-item');
    cardItems.forEach((card, index)=> {
      // const distance = index % 2 === 0 ? 5:-5;
      const tl = gsap.timeline({paused:true});
  
      tl.fromTo(card, {
        autoAlpha: 0,
        yPercent: 4,
        ease:'power4.inOut"',
        duration: .7
      }, { 
        autoAlpha:1, 
        yPercent: 0,
        ease:'power4.inOut"',
        duration: .7
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

  const cards = [
    {
      id: 1,
      cardImage: harlow,
      cardLocation: "North London 1",
      cardPower: "3.3MVA, 14.3MVA",
      cardDescription: "Located 28-minutes by train from Central London (Liverpool St.) a few miles away from Cambridge-1 (Nvidia’s supercomputer), this data centre is a stand-alone building of new construction, available with 3.3MVA (for standard compute) or 14.3MVA (for AI compute with DLC for high density). The property is available as shell and core, or as a fully fitted data centre. The property is available on a long term lease or for freehold purchase.",
      cardStatus: "AVAILABLE"
    },
    {
      id: 2,
      cardImage: watford,
      cardLocation: "Northwest London 1",
      cardPower: "11MVA, 44MVA",
      cardDescription: "Located 30-minutes by train from Central London (Kings Cross St Pancras), and located equidistant between Slough / Microsoft, Park Royal and the proposed Google data centres campuses, this data centre is a stand-alone, newly refurbished building, available with 11MVA (for standard compute) or 44MVA (for AI compute with DLC for high density). The property is available as shell and core, or as a fully fitted data centre. The property is available on a long term lease or for freehold purchase.",
      cardStatus: "AVAILABLE"
    },
    {
      id: 3,
      cardImage: bergen,
      cardLocation: "Bergen",
      cardPower: "+100MVA",
      cardDescription: "Located in Norway, with the lowest electricity prices in Europe, this colocation facility can support up to 50kW a rack, and is fed by 100% renewable energy. The site can cater for almost any size of requirement and offers 2N on critical power infrastructure (statistical uptime in line with Tier-3).",
      cardStatus: "COMING SOON"
    },
  ];

  const classes = cn("DATACENTERS relative w-full  mx-auto", className);

  return (
    <div className={classes} id="datacenters">
      <div className="cards py-2 grid md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 xs:gap-y-20 sm:gap-y-28 md:gap-y-16">
        {
          cards.map(card => {
            return <DataCentreCard key={card.id} cardStatus={card.cardStatus} cardLocation={card.cardLocation} cardPower={card.cardPower} cardDescription={card.cardDescription} cardImage={card.cardImage} />
          })
        }
        <div className="shadow rounded bg-slate-50 h-full hidden md:flex  xl:hidden md:flex-col md:justify-self-center md:self-center md:gap-y-8 md:py-8 md:w-full md:justify-center  md:text-white text-base font-semibold ">
          <div className="flex md:mx-auto justify-center font-normal text-lg text-gray-500">Contact us to find out more</div>
          <a href="#contact" className="about-button md:flex md:text-center md:mx-auto md:justify-center  md:py-3 md:rounded-lg  md:bg-primary font-medium w-[300px]">Get in Touch</a>
        </div>
      </div>
    </div>
  )
}