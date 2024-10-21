import axios from "axios";

export const getCharacters = async (page) => {
  const url = `https://www.demonslayer-api.com/api/v1/characters?page=${page}`;
  const { data } = await axios.get(url);
  return data;
};
