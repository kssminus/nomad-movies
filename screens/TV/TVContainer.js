import React, { useState, useEffect } from "react";
import TVPresenter from "./TVPresenter";
import { TV_API } from "../../api";

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

      setTopRated(topRatedData);
      setPopular(popularData);
      setAiringToday(airingTodayData);
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
