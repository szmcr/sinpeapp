import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React, { Component } from "react";

interface ContactAvatarProps {
  firstName: string;
  lastName: string;
  styleProps?: StyleProp<TextStyle>;
}

export default function ContactAvatar({
  firstName,
  lastName,
  styleProps = {},
}: ContactAvatarProps) {
  return (
    <Text style={[styles.contactAvatar, styleProps]}>
      {(firstName || "").substring(0, 1)}
      {(lastName || "").substring(0, 1)}
    </Text>
  );
}

const styles = StyleSheet.create({
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#C6C7FF",
    color: "#3130C6",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 14,
  },
});
