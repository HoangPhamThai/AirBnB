import { message } from "antd";
import axios from "axios";
import { store } from "..";

import { setLoadingOff, setLoadingOn } from "../redux/spinnerSlice";

export let https = axios.create({
  baseURL: "https://airbnbnew.cybersoft.edu.vn/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1OCIsIkhldEhhblN0cmluZyI6IjE2LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODQ5NjAwMDAwMCIsIm5iZiI6MTY5MDM5MDgwMCwiZXhwIjoxNzE4NjQzNjAwfQ.g1qTwikJUdmDmNIzw2Qe8RjiRNvvnH54uKQRLeOC0RU",
    Authorization:
      "bearer " + JSON.parse(localStorage.getItem("USER_INFOR"))?.accessToken,
  },
});

https.interceptors.request.use(
  function (config) {
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    message.error(error.response.data.content)
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
