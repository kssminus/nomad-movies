import Axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const defaultParams = {
  api_key: "030cd1da3e1aba3d17394040d7f12bbc",
  language: "en-US",
};

export const TV_API = {
  topRated: () =>
    Axios.get(`${baseUrl}/tv/top_rated`, { params: defaultParams }),
  popular: () => Axios.get(`${baseUrl}/tv/popular`, { params: defaultParams }),
  airingToday: () =>
    Axios.get(`${baseUrl}/tv/airing_today`, { params: defaultParams }),
  tvDetail: (id) =>
    Axios.get(`${baseUrl}/tv/${id}`, {
      params: {
        ...defaultParams,
        append_to_response: "videos",
      },
    }),
  search: (query) =>
    Axios.get(`${baseUrl}/search/tv`, {
      params: {
        ...defaultParams,
        query,
      },
    }),
};

export const MOVIE_API = {
  nowPlaying: () =>
    Axios.get(`${baseUrl}/movie/now_playing`, { params: defaultParams }),
  upcoming: () =>
    Axios.get(`${baseUrl}/movie/upcoming`, { params: defaultParams }),
  popular: () =>
    Axios.get(`${baseUrl}/movie/popular`, { params: defaultParams }),
  movieDetail: (id) =>
    Axios.get(`${baseUrl}/movie/${id}`, {
      params: {
        ...defaultParams,
        append_to_response: "videos",
      },
    }),
  search: (query) =>
    Axios.get(`${baseUrl}/search/movie`, {
      params: {
        ...defaultParams,
        query,
      },
    }),
};
