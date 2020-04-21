import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Loader from "../../components/Loader";

const SearchPresenter = ({ loading }) => {
  return loading ? <Loader /> : <Text>Search</Text>;
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool,
  // navigattion: PropTypes.object,
};

export default SearchPresenter;
