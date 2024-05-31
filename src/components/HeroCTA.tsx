import { useState, type ComponentProps, type FormEvent, type ChangeEvent, useRef } from "react";
import { cn } from "../utils/utils";
import { MailIcon } from "../utils/svgComponents";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { $isPrivacyMenuOpen } from "../stores/store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type EmailEnquiryType, EmailEnquirySchema } from "../models/Models";
import { toast } from "sonner";
import { Button } from "./Button";
import { PrivacyPolicy } from "./PrivacyPolicy";
import { useStore } from "@nanostores/react";

interface Props extends ComponentProps<"div"> {
  page?: 'home' | 'datacentres'
  dark?: boolean
}
type TurnstileStatus = 'success'|'expired'|'error'|'init';

export const HeroCTA = ({className, children, dark, page='home'}: Props) => {
  const isPrivacyMenuOpen = useStore($isPrivacyMenuOpen);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>('init');

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(EmailEnquirySchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'all'

  })

  const onSubmit = async (data: EmailEnquiryType) => {
    const turnstileResponse = turnstileRef?.current?.getResponse();
    if(!turnstileResponse) {
      console.log("No turnstyle response, reset")
      turnstileRef?.current?.reset();
      return;
    }

    try {
      const res = await fetch('/api/emailEnquiry', {
        method: 'POST',
        body: JSON.stringify({
          ...{...data, turnstileResponse},
        })
      })
      console.log(res)

      // Dev
      // const res = true;

      if(res.ok) {
        toast.success("Thanks for your message. We will get back to you shortly.");
        reset();
      }
      else throw new Error();
    } catch(e) {
      console.log(e)
      toast.error("Something went wrong. Please try again");
    }
  }

  const togglePrivacyPolicy = () => {
    document.body.style.overflow = "hidden";
    $isPrivacyMenuOpen.set(true);
  }

  const classes = cn("overflow-visible relative cta flex flex-col gap-y-3", className)
  return (
    <div ref={ctaRef} className={classes}>
      <p data-dark={dark} className="data-[dark=true]:text-slate-200 data-[dark=true]:lg:text-slate-500 w-full pl-1 leading-6 sm:leading-7 text-base sm:text-base  ">
        Get notified <span className="xxs-v:hidden"></span> 
      </p> 

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex w-full space-x-2 mb-3 ">
          <input {...register("email")} type="email" name="email" id="email" className="email--hero  xs:max-w-[300px] shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3" placeholder="Enter your email" />
          <button type="submit" className="rounded-md border border-transparent bg-primary px-4 text-base font-medium text-white shadow-sm hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 xs:inline-flex xs:w-auto xs:flex-shrink-0 xs:items-center xs:justify-center xs:mt-0 xs:ml-3">
            <MailIcon />
          </button> 
        </div>
        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-primaryDark hidden">
          <label htmlFor="password" className="block relative py-1.5">
            Password
          </label>
          <input id="password" {...register("password")}
            autoComplete=""
            className="w-full max-w-[300px] rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-2"
            />
          {errors.password && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.password?.message}</p>}
        </div>

        {/* <Turnstile 
          id="email-widget"
          className="email-widget z-50  "
          ref={turnstileRef} 
          // siteKey='3x00000000000000000000FF' 
          siteKey='1x00000000000000000000AA'
          onError={() => {setTurnstileStatus('error'); }}
          onExpire={() => {setTurnstileStatus('expired');}}
          onSuccess={() => {setTurnstileStatus('success');}}
          options={{
            action: 'email-form',
            // theme: 'dark',
            appearance: 'interaction-only'
          }}
        /> */}
      </form>

      <p data-page={page} className="privacy-link data-[page='home']:text-slate-200 data-[page='home']:lg:text-slate-500 w-full pl-1 leading-6 sm:leading-7 text-sm sm:text-base ">
        <span className="xs-v:hidden">We care about your data. Read our</span>
        <Button onClick={togglePrivacyPolicy} data-page={page} variant="ghost" className=" data-[page='home']:text-slate-200 data-[page='home']:lg:text-slate-500 inline-flex xxs:ml-2 data-[page='datacentres']:lg:ml-2 font-medium underline">Privacy Policy</Button>
      </p> 
    </div>
  )
}