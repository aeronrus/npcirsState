import axios from 'axios';

export const addRequest = axios.create({
  baseURL: 'https://63905cbd0bf398c73a84e157.mockapi.io/items',
});
