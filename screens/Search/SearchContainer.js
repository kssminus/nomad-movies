import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [loading, setLoading] = useState(false);
  const [movieResults, setMovieResults] = useState([]);
  const [tvResults, setTvResults] = useState([]);
  const [query, setQuery] = useState("");
  return (
    <SearchPresenter
      loading={loading}
      movieResults={movieResults}
      tvResults={tvResults}
      onChangeQuery={setQuery}
    />
  );
};
