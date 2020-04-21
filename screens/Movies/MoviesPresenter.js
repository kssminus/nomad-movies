import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ navigation, loading }) => {
  return loading ? (
    <Loader />
  ) : (
    <View>
      <Text>Movie</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

MoviesPresenter.propTypes = {
  loading: PropTypes.bool,
  navigattion: PropTypes.object,
};
export default MoviesPresenter;
