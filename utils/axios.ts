import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { showMessage } from ".";
let reqNum = 0;
const CancelToken = axios.CancelToken;
const pending: Map<string, () => void> = new Map();

const delPending = (config: AxiosRequestConfig<unknown>) => {
  const configUrl =
    config.url + (config.data ? JSON.stringify(config.data) : "");
  pending.delete(configUrl);
};

const instance = axios.create({
  baseURL: "/api",
  timeout: 60000,
  headers: {
    "x-requested-with": "XMLHttpRequest",
    "x-frame-options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
  },
});

instance.interceptors.request.use(
  (config) => {
    if (reqNum == 0) console.log("");

    const configUrl =
      config.url + (config.data ? JSON.stringify(config.data) : "");

    if (pending.has(configUrl)) {
      reqNum--;
      pending.get(configUrl)?.();
    }

    config.cancelToken = new CancelToken((c) => {
      pending.set(configUrl, c);
    });

    reqNum++;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    delPending(response.config);
    reqNum--;

    if (reqNum == 0) console.log("");
    if (response.data.code !== 1)
      showMessage("warning", response.data.msg, "warning");
    return response;
  },
  (error) => {
    if (error.message === "canceled")
      return {
        code: 1,
        data: undefined,
        message: "canceled",
      };
    if (error.response) {
      delPending(error.response.config);
    }
    reqNum--;
    if (reqNum == 0) console.log("");
    return {
      code: -1,
      data: undefined,
      error,
    };
  }
);

export const request = (url: string, option: AxiosRequestConfig) => {
  return instance(url, { ...option });
};

export const requestB = (url: string, option?: AxiosRequestConfig) => {
  return instance(url, { method: option?.method || "POST", ...option });
};
