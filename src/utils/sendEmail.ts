interface Props {
  email: Email 
}

interface Email {
  personalizations: {
    to: {email: string, name: string}[],
  }[],
  from: {email: string, name: string},
  replyTo: {email: string, name: string},
  subject: string,
  content: {type: string, value: string}[],
}

export const sendEmail = async({email}: Props) => {
  const SENDGRID_API_KEY = import.meta.env.SENDGRID_API_KEY;
  if(!SENDGRID_API_KEY) throw new Error("Sendgrid key is either missing or invalid");

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(email),
  });

  if(!response.ok) {
    const responseBody = await response.text();
    throw new Error(`Failed to send email. Response status: ${response.status}. Response body: ${responseBody}`, {cause: response});
  }

  return {response};
}

