import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { headerStyle } from "../navigation/config";

const Stack = createStackNavigator();
const body = () => <Text>Detail</Text>;
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={body}
        options={{ ...headerStyle }}
      />
    </Stack.Navigator>
  );
};
