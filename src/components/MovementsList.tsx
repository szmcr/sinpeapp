import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import MovementDetails from "./MovementDetails";
import { IMovementDetails } from "../types/types";
import { mockMovements } from "../mock/data";
import { useFetch } from "../hooks/useFetch";

export default function MovementsList() {
  const {
    data: movements,
    refreshing,
    initalLoading,
  } = useFetch(`/movements?limit=10`);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movimientos</Text>

      <View style={[styles.dataList, { width: "100%" }]}>
        {initalLoading ? (
          <ActivityIndicator size="large" color="#4c51f7" />
        ) : !movements ? (
          <Text style={styles.noDataText}>No hay movimientos</Text>
        ) : (
          <FlatList
            data={movements.movements}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovementDetails item={item} />}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3e3e3e",
    marginBottom: 10,
  },
  dataList: {
    marginTop: 15,
  },
  loadingText: {
    textAlign: "center",
    padding: 10,
    color: "#4c51f7",
  },
  noDataText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
  },
});
