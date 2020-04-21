import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";

export const headerStyle = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomColor: 0,
  },
  headerTitleStyle: {
    color: TINT_COLOR,
  },
  headerTintColor: TINT_COLOR,
};

const Stack = createStackNavigator();
export const createStack = (screen, name) => {
  return () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={name}
          component={screen}
          options={{
            ...headerStyle,
          }}
        />
      </Stack.Navigator>
    );
  };
};
