import React from "react";
import { Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

interface CommonHeaderProps {
  title: string;
}

export default function CommonHeader({ title }: CommonHeaderProps) {
  const navigation = useNavigation();

  return (
    <Stack.Screen
      options={{
        presentation: "modal",
        headerLeft: () => {
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
        headerTitle: title,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#4C51F7" },
        headerShadowVisible: false,
      }}
    />
  );
}
