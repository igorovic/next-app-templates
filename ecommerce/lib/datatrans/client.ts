import axios from "axios";

const client = axios.create({
  baseURL: "https://api.sandbox.datatrans.com",
});

export default client;
