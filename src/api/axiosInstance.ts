
import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_OMDB_BASE_URL,
    params: {
      apikey: import.meta.env.VITE_OMDB_API_KEY,
    },
  });

axiosInstance.interceptors.response.use(
    response => response,
    error =>
    {
        if (error.response)
        {
            // Server responded with a status code outside 2xx range
            toast.error(`Error: ${error.response.status} - ${error.response.data.error || "Something went wrong."}`);
        } else if (error.request)
        {
            // No response from server
            toast.error("No response from the server. Please check your network.");
        } else
        {
            // Something else went wrong
            toast.error("An unexpected error occurred. Please try again later.");
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
