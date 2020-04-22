import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Loader from "../../components/Loader";
import Slider from "../../components/Slider";
import Section from "../../components/Section";
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
      {nowPlaying && (
        <Slider>
          {nowPlaying
            .filter((movie) => !!movie.backdrop_path)
            .map((movie) => {
              return (
                <View key={movie.id}>
                  {nowPlaying && <MovieSlide {...movie} />}
                </View>
              );
            })}
        </Slider>
      )}
      {upcoming && <Section title="Upcoming Movies" contents={upcoming} />}
      {popular && (
        <Section title="Popular Movies" contents={popular} horizontal={false} />
      )}
    </Container>
  );
};

MoviesPresenter.propTypes = {
  loading: PropTypes.bool,
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
};
export default MoviesPresenter;
