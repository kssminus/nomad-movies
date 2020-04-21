import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [loading, setLoading] = useState(true);
  return <SearchPresenter loading={loading} />;
};
