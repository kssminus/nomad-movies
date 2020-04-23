import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";

const Containter = styled.View`
  background-color: ${BG_COLOR};
`;
const SearchBar = styled.View`
  align-items: center;
`;
const SearchInput = styled.TextInput`
  background-color: ${TINT_COLOR};
  width: ${Layout.width / 1.5}px;
  border-radius: 12px;
  margin-vertical: 10px;
  padding: 3px 10px;
  text-align: center;
`;
const SearchResult = styled.ScrollView`
  height: 100%;
  padding: 10px;
`;
const Text = styled.Text`
  color: ${GREY_COLOR};
  text-align: center;
`;

const SearchPresenter = ({
  loading,
  movieResults,
  tvResults,
  query,
  onChangeQuery,
  submit,
}) => {
  return (
    <Containter>
      <SearchBar>
        <SearchInput
          onChangeText={onChangeQuery}
          value={query}
          returnKeyType="search"
          placeholder="Search Movies and TV"
          placeholderTextColor={GREY_COLOR}
          onSubmitEditing={submit}
          autoCorrect={false}
        />
      </SearchBar>
      <SearchResult>
        {loading ? (
          <Loader />
        ) : (
          <>
            {movieResults.length > 0 ? (
              <Section title="Movie Results" contents={movieResults} />
            ) : null}
            {tvResults.length > 0 ? (
              <Section title="TV Results" contents={tvResults} />
            ) : null}
            {movieResults.length === 0 && tvResults.length === 0 ? (
              <Text>No Results</Text>
            ) : null}
          </>
        )}
      </SearchResult>
    </Containter>
  );
};

SearchPresenter.propTypes = {
  loading: PropTypes.bool,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  query: PropTypes.string,
  onChangeQuery: PropTypes.func,
  submit: PropTypes.func,
};

export default SearchPresenter;
