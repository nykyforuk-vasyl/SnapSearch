import axios from "axios";

const API_KEY = "GDY5kFttlZ6do23iVYxc0ZSjVa2mNhSFnGmCjVV8mnQ";

axios.defaults.baseURL = `https://api.unsplash.com/`;

const searchImagesForTopic = async (topic, page) => {
  const res = await axios.get(
    `search/photos?client_id=${API_KEY}&query=${topic}&per_page=8&page=${page}`
  );

  return res.data.results;
};

export default searchImagesForTopic;
