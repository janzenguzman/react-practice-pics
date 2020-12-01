import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID fMzpzNqCI3YhcTiflBuaQm0K2u9Uox7-xm0pg1CSzwc'
  }
});
