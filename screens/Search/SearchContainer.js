import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { MOVIE_API, TV_API } from "../../api";
import { posterFilter } from "../../utils";

export default () => {
  const [loading, setLoading] = useState(false);
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [query, setQuery] = useState("");

  const searching = async (searchTerm) => {
    const {
      data: { results: movieData },
    } = await MOVIE_API.search(searchTerm);
    const {
      data: { results: tvData },
    } = await TV_API.search(searchTerm);

    setMovieResults(movieData.filter(posterFilter));
    setTvResults(tvData.filter(posterFilter));
  };

  const handleSubmit = ({ nativeEvent: { text: searchTerm } }) => {
    if (searchTerm != "") {
      setLoading(true);
      try {
        searching(searchTerm);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SearchPresenter
      loading={loading}
      movieResults={movieResults}
      tvResults={tvResults}
      query={query}
      onChangeQuery={setQuery}
      submit={handleSubmit}
    />
  );
};
