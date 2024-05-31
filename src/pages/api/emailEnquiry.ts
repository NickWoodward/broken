// export const prerender = false;

import type { APIRoute } from "astro";
import { EmailEnquirySchema, EnquirySchema } from "../../models/Models";
// import { sendEmail } from "../../utils/sendEmail";

const TURNSTILE_VERIFY_ENDPOINT = import.meta.env.TURNSTILE_VERIFY_ENDPOINT;
const TURNSTILE_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { 
    turnstile: token, 
    email,
    password: honeypot
  } = body;
  
  if(honeypot) {
    return new Response(null, {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })
  }

  // Validate Form
  if(!body || EmailEnquirySchema.safeParse({ email }).success !== true) {
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    })
  };
  
  try {
    // Validate Token
    const res = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${encodeURIComponent(TURNSTILE_KEY)}&response=${encodeURIComponent(token)}`,
    });

    const data = await res.json();

    // Token Failure
    if(!data.success) {
      return new Response(JSON.stringify(data), {
        status: 400,
        headers: {
          'content-type': 'application/json'
        }
      })
    }
    console.log(body);

    // Token Success
    // const response = await sendEmail(`HERO CTA ENQUIRY`, `Email Enquiry from ${email}`, email);

    // console.log('response', response);
    console.log("sent");
    return new Response(null, {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    })
  } catch(e) {
    console.log('error', e);
    return new Response(JSON.stringify('Request failed'), {
      status: 500,
      headers: {
        'content-type': 'application/json'
      }
    })
  }
  

}