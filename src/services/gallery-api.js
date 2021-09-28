import axios from "axios";

const API_KEY = "22496813-a3fbe39786787c712b168fbe4";
const BASE_URL = "https://pixabay.com/api/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  image_type: 'photo',
  key: API_KEY,
}

export const fetchGallery = async (query, page) => {
  const { data } = await axios.get('', {
    params: {
      page,
      q: query
    }
  })

  return data.hits;
}

