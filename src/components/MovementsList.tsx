import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import MovementDetails from "./MovementDetails";
import { API_URL } from "../constants/API";

export default function MovementsList() {
  const [movements, setMovements] = useState<any[]>([]);
  const [lastEvaluatedKey, setLastEvaluatedKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const fetchMovements = async (limit: number = 10) => {
    if (loading) return;

    setLoading(true);

    // TIMEOUT PARA SIMULAR RETRASO EN LA CARGA DE DATOS (2 SEGUNDOS)
    setTimeout(async () => {
      try {
        const params: any = { limit };
        if (lastEvaluatedKey) {
          params.lastEvaluatedKey = lastEvaluatedKey;
        }

        const response = await axios.get(`${API_URL}/movements`, { params });

        const {
          movements: newMovements,
          lastEvaluatedKey: newLastEvaluatedKey,
        } = response.data;

        setMovements((prevMovements) => [...prevMovements, ...newMovements]);
        setLastEvaluatedKey(newLastEvaluatedKey);
      } catch (error) {
        console.error("Error fetching movements:", error);
      } finally {
        setLoading(false);
        setInitialLoading(false);
        setIsFetchingMore(false);
      }
    }, 2000);
  };

  useEffect(() => {
    fetchMovements(10);
  }, []);

  const handleLoadMore = () => {
    if (!loading && lastEvaluatedKey) {
      setIsFetchingMore(true);
      fetchMovements(10);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movimientos</Text>

      <View style={[styles.dataList, { width: "100%" }]}>
        {initialLoading ? (
          <ActivityIndicator size="large" color="#4c51f7" />
        ) : !movements.length ? (
          <Text style={styles.noDataText}>No hay movimientos</Text>
        ) : (
          <FlatList
            data={movements}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <MovementDetails item={item} />}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingMore ? (
                <View style={styles.loadingFooter}>
                  <ActivityIndicator size="large" color="#4c51f7" />
                </View>
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
  noDataText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 18,
  },
  loadingFooter: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
