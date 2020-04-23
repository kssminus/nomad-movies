import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { headerStyle } from "../navigation/config";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";

const Stack = createStackNavigator();
const Text = styled.Text``;

const body = () => {
  const route = useRoute();
  return <Text>{JSON.stringify(route)}</Text>;
};
export default () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={body}
        name={route.params.title}
        options={{
          ...headerStyle,
          headerLeft: () => {
            return (
              <Ionicons.Button
                name="ios-arrow-back"
                size={26}
                color={TINT_COLOR}
                backgroundColor={BG_COLOR}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            );
          },
        }}
      />
    </Stack.Navigator>
  );
};
