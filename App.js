import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import TabNavigation from "./navigation/TabNavigation";

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
    return <TabNavigation />;
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
