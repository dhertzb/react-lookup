import axios from "axios";
const apiKey = process.env.REACT_APP_API_KEY;

const $axios = axios.create({});

export function test() {
  return $axios.get(
    `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=0jorge&weirdness=10`
  );
}
