import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Text = styled.Text`
  color: ${(props) => (props.inSlide ? TINT_COLOR : GREY_COLOR)};
  font-size: ${(props) => (props.inSlide ? "16px" : "10px")};
  padding-bottom: 5px;
`;

const Rating = ({ rate, inSlide = false }) => {
  return <Text inSlide={inSlide}>⭐️ {rate} / 10</Text>;
};

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
  inSlide: PropTypes.bool,
};

export default Rating;
