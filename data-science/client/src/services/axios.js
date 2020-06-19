import Axios from "axios";

const axiosOptions = {
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-type": "application/json",
  },
};

const axios = Axios.create(axiosOptions);

export default axios;
