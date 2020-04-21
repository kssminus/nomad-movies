import React, { useState } from "react";
import TVPresenter from "./TVPresenter";

export default () => {
  const [loading, setLoading] = useState(true);
  return <TVPresenter loading={loading} />;
};
