import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Loader from "../../components/Loader";
import Slider from "../../components/Slider";
import MovieSlide from "./MovieSlide";
import { BG_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const SwiperHeight = Layout.height / 3;
const View = styled.View`
  background-color: ${BG_COLOR};
  height: ${SwiperHeight};
`;

const MoviesPresenter = ({ loading, nowPlaying, upcoming, popular }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Slider>
        {nowPlaying
          .filter((movie) => !!movie.backdrop_path)
          .map((movie) => {
            return (
              <View key={movie.id}>
                <MovieSlide {...movie} />
              </View>
            );
          })}
      </Slider>
    </Container>
  );
};

MoviesPresenter.propTypes = {
  loading: PropTypes.bool,
  navigattion: PropTypes.object,
  nowPlaying: PropTypes.array,
};
export default MoviesPresenter;
