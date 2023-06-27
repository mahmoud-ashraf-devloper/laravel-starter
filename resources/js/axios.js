import axios from "axios";

export default axios.create({
  baseURL: "http://127.1.1:8000",
  headers: {
    "Content-type": "application/json"
  }
});