import React from "react";
import PropTypes from "prop-types";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import Poster from "./Poster";
import Rating from "./Rating";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  margin-vertical: 20px;
  align-items: ${(props) => (props.horizontal ? "center" : "flex-start")};
  margin-left: 10px;
  flex-direction: ${(props) => (props.horizontal ? "column" : "row")};
  flex: 1;
`;

const Title = styled.Text`
  font-size: 12px;
  color: ${TINT_COLOR};
  margin-vertical: 5px;
`;

const Info = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: ${(props) => (props.horizontal ? "center" : "flex-start")};
  padding-left: ${(props) => (props.horizontal ? "0" : "5%")};
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 13px;
`;

const Item = ({
  id,
  title,
  name,
  poster_path,
  vote_average,
  overview,
  horizontal = true,
}) => {
  let displayTitle = title || name;
  const navigation = useNavigation();

  if (horizontal && displayTitle.length > 18) {
    displayTitle = `${displayTitle.substring(0, 18)}...`;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("Detail", {
          id,
          title: displayTitle,
          isMovie: !!title,
        });
      }}
    >
      <Container horizontal={horizontal}>
        <Poster path={poster_path} />
        <Info horizontal={horizontal}>
          <Title>{displayTitle}</Title>
          {vote_average ? <Rating rate={vote_average} /> : null}
          {!horizontal && overview ? (
            <Overview>
              {overview.length > 200
                ? `${overview.substring(0, 200)}...`
                : overview}
            </Overview>
          ) : null}
        </Info>
      </Container>
    </TouchableWithoutFeedback>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  horizontal: PropTypes.bool,
};

export default Item;
