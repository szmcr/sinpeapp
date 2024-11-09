import {
  View,
  Text,
  StyleSheet,
  FlatListComponent,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import MovementDetails from "./MovementDetails";
import { IMovementDetails } from "../types/types";
import { mockMovements } from "../mock/data";

export default function MovementsList() {
  const [movements, setMovements] = useState<IMovementDetails[]>();

  useEffect(() => {
    /* TODO Fetch DATA */

    setMovements(mockMovements);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movimientos</Text>
      <FlatList
        style={styles.dataList}
        data={movements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovementDetails item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3e3e3e",
    marginTop: 30,
    marginBottom: 10,
  },
  dataList: {
    width: "100%",
    marginTop: 15,
  },
});
