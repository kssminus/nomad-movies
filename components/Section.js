import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import Item from "./Item";
import { TINT_COLOR } from "../constants/Colors";

const Container = styled.View`
  margin-vertical: 10px;
`;
const ScrollView = styled.ScrollView``;
const Title = styled.Text`
  color: ${TINT_COLOR};
  padding-left: 20px;
  font-weight: 600;
`;

const Section = ({ title, contents, horizontal = true, navigation }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ScrollView horizontal={horizontal}>
        {contents
          .filter((content) => content.poster_path != null)
          .map((content) => (
            <Item key={content.id} {...content} horizontal={horizontal} />
          ))}
      </ScrollView>
    </Container>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired,
  horizontal: PropTypes.bool,
};

// export default withNavigation(Section);
export default Section;
