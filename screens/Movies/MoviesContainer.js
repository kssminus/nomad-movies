import React, { useState, useEffect } from "react";
import MoviesPresenter from "./MoviesPresenter";
import { MOVIE_API } from "../../api";

export default () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      // const upcoming = await MOVIE_API.upcoming();
      // const popular = await MOVIE_API.popular();
      const nowPlaying = await MOVIE_API.nowPlaying();
      console.log(nowPlaying);
    }

    try {
      fetchMovies();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return <MoviesPresenter loading={loading} />;
};
