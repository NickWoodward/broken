import { useRef, type ComponentProps } from "react"
import { cn } from "../utils/utils"
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
// import { useGSAP } from "@gsap/react";

interface Props extends ComponentProps<"div"> {
  // dark?: boolean,
  toggleMenu: () => void,
  isOpen: boolean,
}

export const MobileBurger = ({className, toggleMenu, isOpen}: Props) => {
  // const {className, toggleMenu, isOpen} = props;
  const ref = useRef<HTMLDivElement>(null);
  const burgerTl = useRef<GSAPTimeline>();
  // const { contextSafe } = useGSAP(() => {
  //   const lines = gsap.utils.toArray<HTMLElement>(".line");
  //   // console.log({isOpen});
  //   burgerTl.current = gsap
  //     .timeline({ 
  //       defaults: {duration:.4},
  //       paused: true,
  //     })
  //     .to(lines[0], { scaleX: 0 })
  //     .to(lines[2], { scaleX: 0 }, '<.2')
  //     .to(lines[1], { rotate:135 }, '<.2')
  //     .set(lines[3], { display:'block', rotate:135}, '<.35')
  //     .to(lines[3], { rotate:45 }, '<');
  // }, { dependencies: [isOpen] });

  const handleClick = () => {
    // toggleTimeline();
    toggleMenu();
  }

  // const toggleTimeline = contextSafe(() => {
  //   if (!isOpen) {
  //     burgerTl?.current?.play(); // Play the animation if it's paused
  //   } else {
  //     burgerTl?.current?.reversed(!burgerTl?.current?.reversed()); // Reverse the animation if it's playing
  //   }
  // });
;
  return (
    <div 
      className={cn("burger relative flex flex-col justify-between sm:hidden  w-8 h-5 mr-1 cursor-pointer", {"justify-center":isOpen}, className)}
      ref={ref}
      onClick={handleClick}
    >
      <div 
        data-open={isOpen}
        className='line w-full h-[2px] bg-slate-400 data-[open="true"]:hidden'>
      </div>
      <div 
        data-open={isOpen}
        className='line w-full h-[2px] bg-slate-400 data-[open="true"]:-rotate-[135deg]'>
      </div>
      <div 
        data-open={isOpen}
        className='line w-full h-[2px] bg-slate-400 data-[open="true"]:hidden'>  
      </div>

      <div className="line-wrapper absolute top-0 left-0 flex items-center h-full w-full">
        <div  data-open={isOpen} className="line data-[open='false']:hidden data-[open='true']:rotate-[135deg] w-full h-[2px] bg-slate-400"></div>
      </div>
    </div>
  )
}

