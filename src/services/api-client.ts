import axios from "axios";

const rawg = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b0c108ec849748e3b44721a8c5c45e47",
  },
});

export default rawg;