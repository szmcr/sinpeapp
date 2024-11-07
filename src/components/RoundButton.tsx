import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { UnionBtnIcon } from "./UnionBtnIcon";
import { Image } from "react-native-svg";
import { Link } from "expo-router";

export default function RoundButton() {
  return (
    <Link href="/contacts" asChild>
      <TouchableOpacity style={styles.container}>
        <UnionBtnIcon />
      </TouchableOpacity>
    </Link>
  );
}

const styles = {
  container: {
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
