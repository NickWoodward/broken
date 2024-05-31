import {  useRef, type ComponentProps } from "react"
import {gsap} from 'gsap';
import { useGSAP } from "@gsap/react";

import { HeroTitle } from "./HeroTitle"
import { HeroContent } from "./HeroContent"
import { HeroCTA } from "./HeroCTA";
import { cn } from "../utils/utils";
import theme from '../styles/theme'; 
const title = "This is a test";
const subtitle = "Test";
const content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In praesentium laborum autem. Quas facilis facere eum provident distinctio adipisci earum!";
const contentSmall = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In praesentium laborum autem. Quas facilis facere eum provident distinctio adipisci earum!";
interface Props extends ComponentProps<"div"> {
}

export const Hero = ({className}: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { screens: {sm,lg} }  = theme;

  useGSAP(() => {
    // let mm = gsap.matchMedia();
    // mm.add(`(min-width: ${lg})`, () => {})

      const tl = gsap.timeline({
        defaults: {duration:0.4, ease: "ease.power.in"},
      })
      .fromTo('.hero-image', {autoAlpha:0, y:10, scale:1.04 }, {autoAlpha:1, y:0, scale:1, duration:1.2})
      .fromTo('.hero-title',{y:10, autoAlpha:0}, {y:0, autoAlpha:1}, '<.4')
      .fromTo('.hero-content', {y:10, autoAlpha:0},{y:0, autoAlpha:1}, "<0.1")
      .fromTo('.hero-cta',{y:10, autoAlpha:0}, {y:0, autoAlpha:1}, "<0.1");
      
  });

  const classes = cn("hero relative gap-8 xs-v:gap-4  grid  auto-rows-min grid-cols-3 w-full ", className);

  return (
    <div ref={heroRef} id="hero" className={classes}> 
      <HeroTitle title={title} subtitle={subtitle} className="opacity-0 invisible hero-title row-start-1 col-start-1 col-span-full xs:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[750px]" />
      <HeroContent content={content} className="opacity-0 invisible hero-content xxs-v:hidden row-start-2 col-start-1 col-span-full max-w-[600px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[780px]" />
      <HeroContent content={contentSmall} className="opacity-0 invisible hero-content xxs-v:flex hidden row-start-2 col-start-1 col-span-full max-w-[600px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[780px]" />
      <HeroCTA dark={true} className="xs-v:mt-2 opacity-0 invisible hero-cta text-slate-400 row-start-3 col-start-1 col-span-full xs:max-w-[420px]" />
      
      {/* <div className="col-start-2 col-span-2 row-start-1 row-span-full -skew-x-12 bg-slate-400">
      </div> */}
    </div>
  // <div class=" relative mt-[var(--header-height)]  min-h-min h-section" > 

  //         <div class="relative h-full w-full bg-white before:hidden before:absolute before:bg-white before:w-4/6 before:lg:block xl:before:w-3/5 before:h-full before:border-slate-100 before:border-r-8 before:-skew-x-12 before:z-30">
            
  //           <div class="absolute top-0 right-0 h-full w-full bg-slate-400  ml-auto object-cover lg:w-1/2 lg:h-full " > </div>
  //           <div class="image-wrapper relative mix-blend-multiply brightness-[40%] h-full ml-auto lg:w-1/2 lg:h-full lg:brightness-100  grayscale">
  //             image
  //           </div>

  //           <div class="image__navigation absolute right-0 bottom-0 flex items-center mb-9 mr-6">
  //             <div class="prev__btn cursor-pointer">
  //               <svg class="h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  //                 <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  //               </svg>
  //             </div>

  //             <div class="flex items-center">
  //               images
  //             </div>

  //             <div class="next__btn cursor-pointer">
  //               <svg class="h-5 w-5 ml-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  //                 <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  //               </svg>
  //             </div>

  //             <button type="button" class="autoplay__btn bg-primary relative inline-flex h-5 w-9 ml-4 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out outline-none ring-2 ring-primary ring-offset-2">
  //               <span class="sr-only">AutoPlay</span>

  //               <span class="autoplay__toggle translate-x-4 pointer-events-none relative inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out">
  //                 <span class="autoplay__icon--off opacity-0 ease-in duration-200 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
  //                   <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
  //                     <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  //                   </svg>
  //                 </span>

  //                 <span class="autoplay__icon--on opacity-100 ease-out duration-100 absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
  //                   <svg class="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 12 12">
  //                     <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
  //                   </svg>
  //                 </span>

  //               </span>
  //             </button>

  //           </div>

  //           <div class="absolute container top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 text-primary z-20">
  //           <div class="absolute w-full max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-[1400px] top-1/2 left-1/2 -translate-y-[58%] -translate-x-1/2 px-4 xxs:px-8 lg:px-0 text-primary z-30">
            
  //             <main class=" lg:px-2 lg:w-1/2 xl:px-0 xl:pl-0">
  //               <div class="md:text-left">
  //                 <h1>
  //                   <div>
  //                     <a href="#" class="inline-flex space-x-4 mb-2">
  //                       <span class="inline-flex items-center space-x-1 text-lg font-semibold text-slate-400 lg:text-gray-500">
  //                         <span>Just shipped version 0.1.0</span>
  //                         <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  //                           <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
  //                         </svg>
  //                       </span>
  //                     </a>
  //                   </div>

  //                   <span class="block text-base font-semibold text-gray-500 xs:text-lg lg:text-base xl:text-lg">Coming soon</span>
  //                   <span class="mt-1 block text-3xl sm:text-5xl md:text-5xl lg:text-5xl">
  //                     <span class="block xxs-v:hidden  text-lg font-medium tracking-tight text-slate-300 lg:text-slate-700">{subtitle}</span>
  //                     <span class="block mt-2 text-primary font-semibold">{title}</span>
  //                   </span>
  //                 </h1>
  //                 <p class="mt-3 text-lg text-slate-200 xs:mt-5 xs:text-xl lg:text-lg lg:text-gray-500 xl:text-2xl">{content}</p>
                  
  //                 <div class="xs-v:hidden mt-8 xs:max-w-lg  md:text-left md:mx-0 lg:text-left lg:max-w-lg">
  //                   <p class="text-base font-medium lg:text-gray-900">Contact one of our experts</p>
  //                   <form action="#" method="POST" class="flex items-center gap-x-2 mt-3 xs:flex xs:flex-row sm:w-full  sm:flex-row">  
  //                     <label for="email--hero" class="sr-only">Email</label>
  //                     <input type="email" name="email" id="email--hero" class="email--hero block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-primary focus:ring-primary xs:flex-1" placeholder="Enter your email">
  //                     <button type="submit" class="rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">
  //                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  //                           <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  //                       </svg> 
  //                     </button>
  //                     <a href="#contact" class="hero__link hidden"></a>
  //                   </form>
  //                   <p class="privacy-link mt-3 text-sm text-slate-300  xs:mt-3 md:mx-0 lg:text-gray-500">
  //                     We care about the protection of your data. Read our
  //                     <a href="#" class="font-medium lg:text-gray-900 underline">Privacy Policy</a>.
  //                   </p>
  //                 </div>
  //               </div>
  //             </main>
            
  //           </div>

  //           <div class="progress absolute bottom-0 left-[var(--progressbar-left)] w-[var(--progressbar-width)] h-2 bg-primary z-20"></div>

  //         </div>
  //       </div>  
  )

}