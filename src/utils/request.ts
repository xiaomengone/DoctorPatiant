import axios, { AxiosError, type Method } from "axios";
import { useUserStore } from "@/stores";
import { showToast } from "vant";
import router from "@/router";

export const baseURL = "https://consult-api.itheima.net/";

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const store = useUserStore();
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user.token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 处理业务失败
    if (response.data.code !== 10000) {
      showToast(response.data.message || "业务失败");
      return Promise.reject(response.data);
    }
    return response.data;
  },
  function (error: AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response?.status === 401) {
      const store = useUserStore();
      store.deleteUser();
      router.push({
        path: "/login",
        query: { returnUrl: router.currentRoute.value.fullPath },
      });
    }

    return Promise.reject();
  }
);
export default instance;

export const request = <T>(
  url: string,
  method: Method = "GET",
  submitData?: object
) => {
  return instance.request<
    any,
    {
      code: number;
      message: string;
      data: T;
    }
  >({
    url,
    method,
    [method.toUpperCase() === "GET" ? "params" : "data"]: submitData,
  });
};
