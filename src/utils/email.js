import emailjs from "@emailjs/browser";

const SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendMail = async (data) => {
  if (SERVICE && TEMPLATE && PUBLIC_KEY) {
    return emailjs.send(SERVICE, TEMPLATE, data, PUBLIC_KEY);
  }
  // If EmailJS is not configured, throw an error so callers can fallback to server
  throw new Error("EmailJS not configured (VITE_EMAILJS_* env vars missing)");
};
