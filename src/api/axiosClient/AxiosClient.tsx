// api/axiosClient.js
import useLoadingStore from "@/redux/store/loadingStore";
import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs
const baseUrl = import.meta.env.VITE_API_URL;
const AxiosClient = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});
AxiosClient.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const accessToken = await sessionStorage.getItem("accessToken");
        if (accessToken)
            config.headers.set("Authorization", `Bearer ${accessToken}`);
        return await config;
    }
);
AxiosClient.interceptors.response.use(
    async (response) => {
        return response?.data || response;
    },
    async (error) => {
        if (error.code === "ERR_NETWORK") {
            toast.error(error.message, {
                autoClose: 500,
                draggable: true,
                pauseOnHover: true,
                position: "bottom-right",
            });
        } else if (!error.response.data) {
            toast.error(error.message, {
                autoClose: 500,
                draggable: true,
                pauseOnHover: false,
                position: "bottom-right",
            });
        } else {
            toast.error(error.response.data.message, {
                autoClose: 500,
                delay: 10,
                draggable: true,
                pauseOnHover: false,
                position: "bottom-right",
            });
        }
        const { status } = error.response || {};
        const prevRequest = error.config;
        const refreshToken = await sessionStorage.getItem("refreshToken");
        // if (!error.response.status) {
        //     return error.message;
        // } else if (status === 401) {
        //     prevRequest.sent = true;
        //     console.log("refreshToken: ", refreshToken);
        //     const config = {
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     };
        //     const newAccessToken = await axios.post(
        //         `${baseUrl}${refreshToken}`,
        //         config
        //     );
        //     if (newAccessToken.data.accessToken) {
        //         console.log("newAccessToken", newAccessToken);
        //         sessionStorage.setItem(
        //             "accessToken",
        //             newAccessToken.data.accessToken
        //         );
        //     }
        // }
        if (status === 401 && !prevRequest?.sent && refreshToken) {
            try {
                prevRequest.sent = true;

                // Yêu cầu token mới
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const response = await axios.post(
                    `${baseUrl}${refreshToken}`,
                    {},
                    config
                );

                const newAccessToken = response?.data?.accessToken;
                if (newAccessToken) {
                    console.log("New Access Token:", newAccessToken);

                    // Cập nhật Access Token trong sessionStorage
                    sessionStorage.setItem("accessToken", newAccessToken);

                    // Gắn Access Token mới vào header và thử lại request
                    prevRequest.headers["Authorization"] =
                        `Bearer ${newAccessToken}`;
                    return axios(prevRequest);
                }
            } catch (refreshError) {
                console.error("Error refreshing token:", refreshError);
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);
export default AxiosClient;
