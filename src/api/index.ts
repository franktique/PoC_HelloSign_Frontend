import axios, { AxiosInstance } from "axios";
import {getEnv} from "../utils/getEnv";

const API_BASE_URL = getEnv("REACT_APP_API_BASE_URL");
const headers = {};

Object.assign(headers, {
  "access-control-allow-origin": '*',
  "access-control-allow-methods":'GET, POST, OPTIONS, PUT, DELETE',
  "access-control-allow-headers":'Authorization, Origin, X-Requested-With, Content-Type, Accept, Request-URL, Referrer-Policy, Referer, Sec-CH-UA, Sec-CH-UA-Mobile, Sec-CH-UA-Platform, Sec-Fetch-Site, User-Agent, X-User-Agent',
});

export const getAxios = (): AxiosInstance =>
  axios.create({
    baseURL: API_BASE_URL,
    headers,
  });

