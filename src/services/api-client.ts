import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "211b572143124633b61bde17da1914f1",
  },
});
