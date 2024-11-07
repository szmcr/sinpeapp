import { View, Text } from "react-native";
import React from "react";
import { IMovementDetails } from "../types/types";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CommonHeader from "@/src/components/CommonHeader";

export default function MovementDetailsScreen() {
  const { movementid } = useLocalSearchParams;

  return (
    <View>
      <CommonHeader title="Detalle de movimiento" />
      <Text>MovementDetailsSection</Text>
    </View>
  );
}
