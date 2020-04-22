import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { makePhotoUrl } from "../utils";
import Layout from "../constants/Layout";

const Image = styled.Image`
  width: ${Layout.posterWidth}px;
  height: ${Layout.posterHeight}px;
  border-radius: 2.5px;
`;
const Poster = ({ path }) => {
  return <Image source={{ uri: makePhotoUrl(path) }} />;
};

Poster.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Poster;
