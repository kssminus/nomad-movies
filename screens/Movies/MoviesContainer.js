import React, { useState, useEffect } from "react";
import MoviesPresenter from "./MoviesPresenter";
import { MOVIE_API } from "../../api";
import { posterFilter } from "../../utils";

const MoviesContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcomming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const {
        data: { results: nowPlayingData },
      } = await MOVIE_API.nowPlaying();
      const {
        data: { results: upcomingData },
      } = await MOVIE_API.upcoming();
      const {
        data: { results: popularData },
      } = await MOVIE_API.popular();

      setNowPlaying(nowPlayingData.filter(posterFilter));
      setUpcomming(upcomingData.filter(posterFilter));
      setPopular(popularData.filter(posterFilter));
    }

    try {
      fetchMovies();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <MoviesPresenter
      loading={loading}
      nowPlaying={nowPlaying}
      popular={popular}
      upcoming={upcoming}
    />
  );
};

export default MoviesContainer;
