import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/src/components/Themed";

export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Esta pantalla no existe.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Ir a ver tu balance!</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
