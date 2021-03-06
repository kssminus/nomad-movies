import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleError = (err) => {
    console.error(err);
  };

  const loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font,
    });
  };

  if (loaded) {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <MainNavigation />
      </>
    );
  } else {
    return (
      <AppLoading
        onError={handleError}
        onFinish={() => setLoaded(true)}
        startAsync={loadAssets}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
