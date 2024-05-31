// export const prerender = false;

import type { APIRoute } from "astro";
import { EnquiryWithTokenSchema } from "../../models/Models";
import { sendEmail } from "../../utils/sendEmail";
// import { sendEmail } from "../../utils/sendEmail";

const TURNSTILE_VERIFY_ENDPOINT = import.meta.env.TURNSTILE_VERIFY_ENDPOINT;
const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  console.log(body);
  const { 
    turnstileResponse: token, 
    fName,
    sName,
    phone,
    email,
    message,
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
  console.log('Past honeypot');
  // Validate Form
  if(!body || EnquiryWithTokenSchema.safeParse({fName, sName, phone, email, message, token}).success !== true) {
    console.log("failing schema validation");
    return new Response(null, {
      status: 404,
      statusText: "Not Found"
    })
  };
  console.log('Past schema');
  try {
    // Validate Token
    const res = await fetch(TURNSTILE_VERIFY_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${encodeURIComponent(TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(token)}`,
    });

    const data = await res.json();
    
    
    console.log('token response', data);
    // Token Failure
    if(!data.success) {
      return new Response(JSON.stringify(data), {
        status: 400,
        headers: {
          'content-type': 'application/json'
        }
      })
    }

    // Token Success
    // , {email: import.meta.env.CC_EMAIL, name: "CC"}
    const emailMessage = {
      personalizations: [{
        to: [{email: import.meta.env.TARGET_EMAIL, name: "Admin"}],
      }],
      from: {email:import.meta.env.MY_EMAIL, name:"The Server"},
      replyTo: {email:import.meta.env.TARGET_EMAIL, name:"Admin"},
      subject: `ENQUIRY from ${fName} ${sName}`,
      content: [
        {
          type: 'text/html',
          value: `${message}`,
        },
      ],
    }
    const response = await sendEmail({email:emailMessage});
    // if(!response.ok) throw new Error();

    //// Dev
    // const response = true;

    console.log('response', response);
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