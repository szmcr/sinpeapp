import {
  View,
  Text,
  StyleSheet,
  FlatListComponent,
  FlatList,
} from "react-native";
import React from "react";
import MovementDetails from "./MovementDetails";

const movements = [
  {
    id: 1,
    contactName: "Juan Pérez",
    amount: 10000,
    date: "2024-11-06 10:00:00",
    phoneNumber: "8888-8888",
  },
  {
    id: 2,
    contactName: "Carlos Solís",
    amount: 5000,
    date: "2021-09-02 10:00:00",
    phoneNumber: "7777-7777",
  },
  {
    id: 3,
    contactName: "María Rodríguez",
    amount: 8000,
    date: "2021-09-03 10:00:00",
    phoneNumber: "6666-6666",
  },
  {
    id: 4,
    contactName: "Ana Jiménez",
    amount: 2000,
    date: "2021-09-04 10:00:00",
    phoneNumber: "5555-5555",
  },
  {
    id: 5,
    contactName: "José Navarro",
    amount: 15000,
    date: "2021-09-05 10:00:00",
    phoneNumber: "4444-4444",
  },
  {
    id: 6,
    contactName: "Luisa Chaves",
    amount: 3000,
    date: "2021-09-06 10:00:00",
    phoneNumber: "3333-3333",
  },
  {
    id: 7,
    contactName: "Pedro Sánchez",
    amount: 7000,
    date: "2021-09-07 10:00:00",
    phoneNumber: "2222-2222",
  },
  {
    id: 8,
    contactName: "Sofía Vargas",
    amount: 4000,
    date: "2021-09-08 10:00:00",
    phoneNumber: "1111-1111",
  },
  {
    id: 9,
    contactName: "Mariana Rojas",
    amount: 6000,
    date: "2021-09-09 10:00:00",
    phoneNumber: "0000-0000",
  },
  {
    id: 10,
    contactName: "Andrés Mora",
    amount: 9000,
    date: "2021-09-10 10:00:00",
    phoneNumber: "9999-9999",
  },
];

export default function MovementsList() {
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
