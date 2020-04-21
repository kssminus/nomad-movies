import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading }) => {
  console.log(loading);
  return loading ? <Loader /> : <Text>TV</Text>;
};

TVPresenter.propTypes = {
  loading: PropTypes.bool,
  // navigattion: PropTypes.object,
};

export default TVPresenter;
