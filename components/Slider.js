import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";

const SwiperHeight = Layout.height / 3;
const Text = styled.Text``;

const Slider = (props) => {
  return props.children ? (
    <Swiper
      showsPagination={false}
      autoplay
      autoplayTimeout={5}
      style={{
        height: SwiperHeight,
      }}
    >
      {props.children}
    </Swiper>
  ) : (
    <Text>Empty</Text>
  );
};

Slider.propTypes = {};

export default Slider;
