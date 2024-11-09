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

export default function MovementsList() {
  const [movements, setMovements] = useState<IMovementDetails[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Función para cargar más movimientos
  const loadMovements = () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setTimeout(() => {
      const newMovements = mockMovements.slice((page - 1) * 5, page * 5);
      setMovements((prev) => [...prev, ...newMovements]);

      if (newMovements.length < 5) {
        setHasMore(false);
      }

      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    loadMovements();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movimientos</Text>

      <View style={[styles.dataList, { width: "100%" }]}>
        {loading && page === 1 ? (
          <ActivityIndicator size="large" color="#4c51f7" />
        ) : movements.length === 0 ? (
          <Text style={styles.noDataText}>No hay movimientos</Text>
        ) : (
          <FlatList
            data={movements}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovementDetails item={item} />}
            onEndReached={loadMovements}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
              loading ? (
                <Text style={styles.loadingText}>Cargando más...</Text>
              ) : null
            }
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
