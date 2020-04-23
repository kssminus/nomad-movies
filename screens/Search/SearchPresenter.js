import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../components/Loader";
import { BG_COLOR } from "../../constants/Colors";

const Containter = styled.View`
  background-color: ${BG_COLOR};
`;
const SearchBar = styled.View``;
const SearchResult = styled.ScrollView`
  height: 100%;
`;
const Text = styled.Text``;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  onChangeQuery,
}) => {
  return loading ? (
    <Loader />
  ) : (
    <Containter>
      <SearchBar>
        <Text>searchBar</Text>
      </SearchBar>
      <SearchResult>
        <Text>searh result</Text>
      </SearchResult>
    </Containter>
  );
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  onChangeQuery: PropTypes.func,
};

export default SearchPresenter;
