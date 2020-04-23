import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { TV_API } from "../../api";
import { posterFilter } from "../../utils";

export default () => {
  const [loading, setLoading] = useState(true);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [airingToday, setAiringToday] = useState([]);

  useEffect(() => {
    async function fetchTV() {
      const {
        data: { results: topRatedData },
      } = await TV_API.topRated();
      const {
        data: { results: popularData },
      } = await TV_API.popular();
      const {
        data: { results: airingTodayData },
      } = await TV_API.airingToday();

      setTopRated(topRatedData.filter(posterFilter));
      setPopular(popularData.filter(posterFilter));
      setAiringToday(airingTodayData.filter(posterFilter));
    }

    try {
      fetchTV();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <TVPresenter
      loading={loading}
      topRated={topRated}
      popular={popular}
      airingToday={airingToday}
    />
  );
};
