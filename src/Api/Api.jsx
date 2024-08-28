import axios from "axios";

export const getData = async () => {
  let data = await axios.get(
    "https://official-joke-api.appspot.com/random_joke"
  );
  return data.data
};


export const getImage = async () => {
  let data = await axios.get(
    "https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json"
  );
  return data.data
};



