import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Logging the error", error);
    toast.error("Something went wrong");
  }
  return Promise.reject(error);
});

class Request {
  get(url, headers = {}) {
    return axios.get(url, { headers });
  }
}
export default Request;
