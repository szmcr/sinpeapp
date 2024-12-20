import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function LoadingView() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <ActivityIndicator size="large" color="#4C51F7" />
    </View>
  );
}
