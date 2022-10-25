import axios from "axios";

const axiosClient = (options = {}) => {

  if(localStorage.getItem("token")) {
    options = {Authorization:`Bearer ${localStorage.getItem("token")}`}
  }
  return axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      ...options,
    },
  });
};

export default axiosClient;
