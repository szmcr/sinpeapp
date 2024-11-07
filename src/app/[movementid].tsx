import { View, Text } from "react-native";
import React from "react";
import { IMovementDetails } from "../types/types";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MovementDetailsScreen() {
  const { movementid } = useLocalSearchParams;

  return (
    <View>
      <Stack.Screen
        options={{
          presentation: "modal",
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color="#4C51F7"
                style={{ marginLeft: 0 }}
                onPress={() => navigation.goBack()}
              />
            );
          },
          headerTitle: "Detalle de movimiento",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#4C51F7" },
          headerShadowVisible: false,
        }}
      />
      <Text>MovementDetailsSection</Text>
    </View>
  );
}
