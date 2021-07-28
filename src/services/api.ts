import axios from "axios";

const VERCEL_URL = process.env.NEXT_PUBLIC_VERCEL_URL;

const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";
const baseURL = isDev
  ? `http://${VERCEL_URL}/api`
  : `https://${VERCEL_URL}/api`;

export const api = axios.create({
  baseURL,
});
