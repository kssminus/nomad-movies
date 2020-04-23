import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const TVPresenter = ({ loading, topRated, popular, airingToday }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {airingToday && <Section title="Airing Today" contents={airingToday} />}
      {popular && <Section title="Popular TV" contents={popular} />}
      {topRated && (
        <Section title="Top Rated" contents={topRated} horizontal={false} />
      )}
    </Container>
  );
};

TVPresenter.propTypes = {
  loading: PropTypes.bool,
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
};

export default TVPresenter;
