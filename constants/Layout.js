import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
const posterWidth = width / 3;
const posterHeight = posterWidth * 1.5;
export default {
  width,
  height,
  posterWidth,
  posterHeight,
};
