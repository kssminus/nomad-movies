import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MoviesScreen from "../screens/Movies";
import SearchScreen from "../screens/Search";
import TVScreen from "../screens/TV";
import { BG_COLOR } from "../constants/Colors";
import TabBarIcon from "../components/TabBarIcon";
import { createStack } from "./config";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: BG_COLOR,
        },
      }}
    >
      <Tab.Screen
        name="Movie"
        component={createStack(MoviesScreen, "Movie")}
        options={{
          headerStyle: {
            backgroundColor: "white",
          },
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
        component={createStack(TVScreen, "TV")}
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
        component={createStack(SearchScreen, "Search")}
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
