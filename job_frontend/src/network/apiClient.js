import axios from "axios";

const axiosClient = (options = {}) => {
  const { headers = {} } = options;

  return axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      // ...headers,
      "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2NDE5MDY4LCJpYXQiOjE2NjM4MjcwNjgsImp0aSI6ImNlZjhkNmU4OTU2YTRhMGY4NzBiMjk0MDc1Y2ViMTBhIiwidXNlcl9pZCI6M30.j82kYIk4xXmnz1tmYwzK71cpFkh5x_2aewQacW3kMQE"
    },
  });
};

export default axiosClient;
