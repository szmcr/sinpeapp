import {
  View,
  Text,
  StyleSheet,
  FlatListComponent,
  FlatList,
} from "react-native";
import React from "react";
import { formatCurrency } from "../utils/formatCurrency";

const movements = [
  {
    id: 1,
    to: "Juan Pérez",
    amount: 10000,
    dateTime: "2024-11-04 10:00:00",
  },
  {
    id: 2,
    to: "Carlos Solís",
    amount: 5000,
    dateTime: "2021-09-02 10:00:00",
  },
  {
    id: 3,
    to: "María Rodríguez",
    amount: 8000,
    dateTime: "2021-09-03 10:00:00",
  },
  {
    id: 4,
    to: "Ana Jiménez",
    amount: 2000,
    dateTime: "2021-09-04 10:00:00",
  },
  {
    id: 5,
    to: "José Navarro",
    amount: 15000,
    dateTime: "2021-09-05 10:00:00",
  },
  {
    id: 6,
    to: "Luisa Chaves",
    amount: 3000,
    dateTime: "2021-09-06 10:00:00",
  },
  {
    id: 7,
    to: "Pedro Sánchez",
    amount: 7000,
    dateTime: "2021-09-07 10:00:00",
  },
  {
    id: 8,
    to: "Sofía Vargas",
    amount: 4000,
    dateTime: "2021-09-08 10:00:00",
  },
  {
    id: 9,
    to: "Mariana Rojas",
    amount: 6000,
    dateTime: "2021-09-09 10:00:00",
  },
  {
    id: 10,
    to: "Andrés Mora",
    amount: 9000,
    dateTime: "2021-09-10 10:00:00",
  },
];

export default function MovementsList() {
  const formatDate = (date: Date): string => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set to midnight for comparison

    const isToday = date >= today;
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    if (isToday) {
      return `Hoy ${date.toLocaleTimeString("es-CR", timeOptions)}`;
    } else {
      const dateOptions: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      };
      return `${date.toLocaleDateString(
        "es-CR",
        dateOptions
      )} ${date.toLocaleTimeString("es-CR", timeOptions)}`;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movimientos</Text>
      <FlatList
        style={styles.dataList}
        data={movements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movementDetailsContainer}>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={styles.simpleText}>SINPE móvil - {item.to}</Text>
              <Text style={styles.subText}>
                {formatDate(new Date(item.dateTime))}
              </Text>
            </View>
            <Text style={styles.transferAmount}>
              - {formatCurrency(item.amount)}
            </Text>
          </View>
        )}
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
  movementDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  simpleText: {
    fontSize: 15,
    color: "#3e3e3e",
    marginBottom: 5,
  },
  transferAmount: {
    fontSize: 15,
    fontWeight: "700",
    color: "#F44336",
  },
  subText: {
    fontSize: 13,
    color: "#787878",
  },
});
