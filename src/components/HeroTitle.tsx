import type { ComponentProps } from "react";
import { cn } from "../utils/utils";

interface Props extends ComponentProps<"div"> {
  title: string;
  subtitle: string;
}

// TODO: Check on h1 length for SEO
export const HeroTitle = ({className, title, subtitle}: Props) => {
  const classes = cn("", className);

// ***********************************************


// change title size to 40px. h1 width to [500px]
// change poly clip angle above xl

// ***********************************************





  return (
    <>
      <h1 className={classes}>
        <span className="mt-1 block ">
          <span className="block  text-lg 2xl:text-2xl font-medium tracking-tight text-slate-300 lg:text-slate-700">{subtitle}</span>
          <span className="block xxs-v:text-2xl xxs-v:mt-0 mt-2 text-primary text-3xl sm:text-4xl xl:text-title  font-semibold ">{title}</span>
        </span>
      </h1>
    </>

  )
}


// <form action="#" method="POST" className="flex items-center gap-x-2 mt-3 xs:flex xs:flex-row sm:w-full  sm:flex-row">  
//                        <label htmlFor="email--hero" className="sr-only">Email</label>
//                        <input type="email" name="email" id="email--hero" className="email--hero block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary xs:flex-1" placeholder="Enter your email">
//                        <button type="submit" className="rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">
//                          <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                          </svg> 
//                        </button>
//                        <a href="#contact" className="hero__link hidden"></a>
//                      </form>