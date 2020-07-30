import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WE1EYZ0A6FYKOHuOhOcauvsPiW6e5fmxhPIUSRvHzxM",
  },
});
