import type { ReactNode } from "react"
import { gsap } from 'gsap';
import { ArrowIcon, LocationIcon, PowerIcon, UnitsIcon } from "../utils/svgComponents"
import { Button } from "./Button"
import { cn } from "../utils/utils";

export interface CardType {
  cardLocation: string,
  cardPower: string,
  cardDescription: string,
  cardStatus: string,
  cardImage: ReactNode,
}

export const DataCentreCard = ({cardLocation, cardPower, cardDescription, cardStatus, cardImage}: CardType) => {
  return <div className="datacentre-card px-2 md:px-0 gap-y-4 xs:gap-y-8 flex flex-col relative max-w-[550px] mx-auto">

    <div className="card__image card-item  invisible opacity-0 shadow rounded w-full">
      {cardImage}
      <div 
        className={cn(
          "card__banner absolute top-5 rounded-r -translate-x-2.5 px-3 text-white text-base font-medium py-2.5",
          {"bg-primary": cardStatus === "AVAILABLE"} ,
          {"bg-orange-400": cardStatus === "COMING SOON"} 
        )}>
        {cardStatus}
      </div>
    </div>  
    {/* <div className="card__header mt-6 px-6 xs:px-9 text-lg font-semibold leading-8 tracking-tight text-primaryDark">Location:</div> */}
    
    <div className="card-entries card-item  invisible opacity-0 h-full bg-gray-50 shadow rounded  flex flex-col gap-y-2 pt-6 xxs:pt-8 pb-8 pl-4 xxs:pl-6 pr-6 xxs:pr-8">  
      <div className="card__entry w-full flex items-start space-x-4 text-base text-gray-600 ">
        <LocationIcon className="text-primary w-6 h-6"/>
        <div className="">
          <div className=" w-[100px] text-base font-medium tracking-tight text-primary">Location:</div>
          <div className=" text-base">{cardLocation}</div>
        </div>
      </div>
      <div className="card__entry w-full flex items-start space-x-4 text-base text-gray-600 ">
        <PowerIcon className="text-primary w-6 h-6"/>
        <div className="">
          <div className=" w-[100px] text-base font-medium tracking-tight text-primary">Power:</div>
          <div className="  text-base"><a href="#contact" className="">{cardPower}</a></div>
        </div>
      </div>
      <div className="card__entry w-full flex items-start space-x-4 text-base text-gray-600 ">
      </div>

      <div className="card__entry w-full flex items-start space-x-3.5 mt-2 text-base text-gray-600 ">

        <div className="pl-2 xxs:pl-4">
          <div className=" text-base">{cardDescription}</div>
        </div>
      </div>
      <a href="#contact" className="flex justify-center rounded-lg xl:hidden xs:ml-auto  col-start-3 col-span-1 sm:col-start-3 sm:col-span-1 mt-4 xs:mt-12 py-3 pl-4 pr-8 xs:w-[300px] bg-primary  text-white text-base font-medium max-w-[300px] ">Enquire</a>
    </div>

  </div>
}
