import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

import TabNavigation from "./TabNavigation";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();
const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="card" headerMode="none">
        <Stack.Screen name="Tabs" component={TabNavigation} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
