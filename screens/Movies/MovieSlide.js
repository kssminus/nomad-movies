import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { makePhotoUrl } from "../../utils";
import Layout from "../../constants/Layout";
import Poster from "../../components/Poster";
import Rating from "../../components/Rating";
import { TINT_COLOR, GREY_COLOR } from "../../constants/Colors";

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const BgImage = styled.Image`
  width: ${Layout.width}px;
  height: ${Layout.height / 3}px;
  opacity: 0.3;
`;

const Content = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  width: 60%;
  padding-left: 5%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: ${TINT_COLOR};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: ${GREY_COLOR};
  font-size: 13px;
  margin-bottom: 5px;
`;

const BtnContainer = styled.TouchableOpacity``;

const BtnContent = styled.View`
  background-color: #e74c3c;
  padding: 5px;
  border-radius: 2.5px;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR};
  font-size: 12px;
`;

const MovieSlide = ({
  id,
  poster_path,
  backdrop_path,
  title,
  vote_average,
  overview,
}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <BgImage source={{ uri: makePhotoUrl(backdrop_path) }} />
      <Content>
        <Poster path={poster_path} />
        <Column>
          <Title>{title}</Title>
          {vote_average && <Rating rate={vote_average} inSlide />}
          <Overview>
            {overview.length > 200
              ? `${overview.substring(0, 200)}...`
              : overview}
          </Overview>
          <BtnContainer
            onPress={() =>
              navigation.navigate("Detail", { id, title, isMovie: true })
            }
          >
            <BtnContent>
              <BtnText>More Detail</BtnText>
            </BtnContent>
          </BtnContainer>
        </Column>
      </Content>
    </Container>
  );
};

MovieSlide.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
};

export default MovieSlide;
