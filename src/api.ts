import axios from "axios";

const API_KEY = "GDY5kFttlZ6do23iVYxc0ZSjVa2mNhSFnGmCjVV8mnQ";

axios.defaults.baseURL = `https://api.unsplash.com/`;

export type Image = {
  id: string;
  likes: number;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
};

type FetchArticlesResponse = {
  results: Image[];
};

const fetchArticles = async (topic: string, page: number): Promise<Image[]> => {
  const res = await axios.get<FetchArticlesResponse>(
    `search/photos?client_id=${API_KEY}&query=${topic}&per_page=8&page=${page}`
  );

  return res.data.results;
};

export default fetchArticles;
