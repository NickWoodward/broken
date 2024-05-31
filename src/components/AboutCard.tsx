import type { ReactNode } from "react";
import { ArrowIcon } from "../utils/svgComponents";

export interface CardType {
  // cardId: number,
  cardTitle: string,
  cardDescription: string,
  cardImage: ReactNode,
}

export const AboutCard = ({ cardTitle, cardDescription, cardImage}: CardType) => {
  return <div className="card invisible relative px-9 pt-6 pb-12 bg-gray-50 shadow rounded-lg">
    <a href="#contact" className="absolute top-4 right-5 flex items-end justify-end space-x-1  lg:pl-3  font-medium  text-primary">
      <div className="flex justify-end gap-2">
        <div className="hidden sm:flex lg:hidden">Find Out More</div>
        <ArrowIcon />
      </div>
    </a>
    <div className="card__icon -mt-12 w-28 sm:w-32 -translate-x-4">{cardImage}</div>  
    <div className="card__header mt-6 text-xl font-semibold leading-8 tracking-tight text-primaryDark">{cardTitle}</div>
    <div className="card__description mt-2 text-lg leading-7 text-gray-600">{cardDescription}</div>
  </div>
};