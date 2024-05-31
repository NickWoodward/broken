import { useForm, type SubmitHandler } from "react-hook-form";
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import { useRef } from "react";
import { toast, Toaster } from "sonner";
import { EnquirySchema } from "../models/Models";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "../utils/utils";
import { Button } from "./Button";

type Inputs = {
  fName: string,
  sName: string,
  phone: string,
  email: string,
  message: string,
  password: string
}

interface Props {
  className?: string
}

export const ContactForm = ({className}: Props) => {
  // const [isLoading, setIsLoading] = useState(false);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: zodResolver(EnquirySchema),
    defaultValues: {
      fName: '',
      sName: '',
      phone: '',
      email: '',
      message: '',
      password: ''
    },
    mode: 'all'

  })

  // const completeForm: SubmitHandler<Inputs> = async (data, e) => {
  const completeForm = async (data: Inputs) => {
    // setIsLoading((prevState) => !prevState);

    const turnstileResponse = turnstileRef.current?.getResponse();
    if(!turnstileResponse) {
      console.log("No turnstyle response, reset")
      turnstileRef.current?.reset();
      return;
    }
    console.log("submitted data:", data, {turnstileResponse})
    const enquiryParams = {...data, turnstileResponse};
    console.log("enquiry params",{enquiryParams});
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        body: JSON.stringify({
          ...enquiryParams,
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

  console.log(watch("fName")) // watch input value by passing the name of it

  const classes = cn("contact-form space-y-2", className)

  return (
    <form onSubmit={handleSubmit(completeForm)} className={classes}>
      <div className="grid xs:grid-cols-2  sm:grid-cols-2  sm:grid-rows-[min-content-fit_1fr] gap-x-5 gap-y-1  ">

        <div className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-primaryDark">
          <label htmlFor="fName" className="block relative py-1.5">Name</label>
          <div className="">
            <input id="fName" type="text" {...register("fName", {required: true})}
              required
              autoComplete="given-name"
              className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.fName && "ring-error ring-2")}
            />
          </div>
          {errors.fName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.fName?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2  text-base lg:text-lg font-medium w-full text-primaryDark">
          <label htmlFor="sName" className="block relative py-1.5" >
            Surname
          </label>
          <input id="sName" type="text" {...register("sName", {required: true})}
            required
            autoComplete="family-name"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.sName && "ring-error ring-2")}
          />
          {errors.sName && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.sName?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-1 text-base lg:text-lg font-medium w-full text-primaryDark">
          <label htmlFor="email" className="block relative py-1.5">
            Email
          </label>
          <input id="email" type="text" {...register("email", {required: true})}
            required
            autoComplete="email"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.email && "ring-error ring-2")}
            />
          {errors.email && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.email?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 text-base lg:text-lg font-medium w-full text-primaryDark">
          <label htmlFor="phone" className="block relative py-1.5">
            Phone
          </label>
          <input id="phone" type="text" {...register("phone", { required: true })}
            required
            autoComplete="tel"
            className={cn("shadow-sm w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-3", errors.phone && "ring-error ring-2")}
            />
          {errors.phone && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.phone?.message}</p>}
        </div>      
        
        <div className="relative  xs:col-span-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-primaryDark">
          <label htmlFor="message" className="block relative py-1.5">
            Message
          </label>
          <textarea id="message" {...register("message", { required: true })}
            required
            autoComplete=""
            className={cn("w-full h-48 rounded shadow-sm outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-2", errors.message && "ring-error ring-2")}
            />
          {errors.message && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.message?.message}</p>}
        </div>

        <div className="relative sm:col-span-1 sm:col-start-2 lg:col-start-1 text-base lg:text-lg font-medium w-full text-primaryDark hidden">
          <label htmlFor="password" className="block relative py-1.5">
            Password
          </label>
          <input id="password" {...register("password")}
            autoComplete=""
            className="w-full rounded outline-none focus:ring-primary focus:ring-2 ring-slate-200 ring-inset ring-1 bg-white text-sm text-input px-3.5 py-2"
            />
          {errors.password && <p className="absolute  top-0 right-0 py-1.5 pr-1 text-sm text-error">{errors.password?.message}</p>}
        </div>

      </div>
    
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-x-2 sm:col-span-2 sm:col-start-1  space-y-3 sm:space-y-0 space-y-reverse sm:space-x-8">

        <Button 
          id=""
          type="submit"
          disabled={!isValid}
          rounded="md"
          intent="primary"
          className="max-w-[300px] mt-3 bg-primary disabled:bg-slate-300 mx-auto xs:mr-0 xs:ml-auto  md:ml-auto w-[250px] xs:w-[300px]  col-start-2 col-span-3 xs:col-start-3 xs:col-span-1 py-3 pl-4 pr-4 text-base font-medium "
        >
          {/* <Tick className="h-6 w-6 flex-none" /> */}
          Submit
        </Button>
      </div>

      <Turnstile 
        id="enquiry-widget" 
        ref={turnstileRef} 
        siteKey='0x4AAAAAAAY1_s37bil7n4PJ'
        // siteKey='1x00000000000000000000AA' 
      />
      <Toaster richColors />
    </form>

  )
}


    // /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   {/* register your input into the hook by invoking the "register" function */}
    //   <input defaultValue="test" {...register("example")} />


    //   {/* include validation with required or other standard HTML validation rules */}
    //   <input {...register("exampleRequired", { required: true })} />
    //   {/* errors will return when field validation fails  */}
    //   {errors.exampleRequired && <span>This field is required</span>}


    //   <button type="submit">Submit</button>
    // </form>