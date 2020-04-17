import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default ({ navigation }) => (
  <View>
    <Text>Movie</Text>
    <Text>Movie</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
      <Text>Detail</Text>
    </TouchableOpacity>
  </View>
);
