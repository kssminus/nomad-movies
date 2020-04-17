import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MoviesScreen from "../screens/Movies";
import SearchScreen from "../screens/Search";
import TVScreen from "../screens/TV";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: BG_COLOR,
        },
      }}
      headerMode="none"
    >
      <Tab.Screen
        name="Movie"
        component={MoviesScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <TabBarIcon
                name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                {...props}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="TV"
        component={TVScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <TabBarIcon
                name={Platform.OS === "ios" ? "ios-tv" : "md-tv"}
                {...props}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: (props) => {
            return (
              <TabBarIcon
                name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                {...props}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
