import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { UnionBtnIcon } from "./UnionBtnIcon";
import { Image } from "react-native-svg";

export default function RoundButton() {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <UnionBtnIcon />
      </TouchableOpacity>
    </>
  );
}

const styles = {
  container: {
    alignSelf: "center",
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 60,
    padding: 18,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 30,
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
  },
};
