import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { IMovementDetails } from "../types/types";
import { Stack, useLocalSearchParams, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import CommonHeader from "@/src/components/CommonHeader";
import ContactAvatar from "../components/ContactAvatar";
import { mockMovements } from "../mock/data";
import LoadingView from "../components/LoadingView";
import { formatCurrency } from "../utils/formatCurrencyUtils";
import { formatSinpeDate } from "../utils/formatDateUtils";

export default function MovementDetailsScreen() {
  const { movementid } = useLocalSearchParams();
  const [movement, setMovement] = useState<IMovementDetails>();

  useEffect(() => {
    /* TODO Fetch DATA */

    const tempMovement = mockMovements.find((m) => m.id === Number(movementid));

    if (!tempMovement) {
      console.error("Movement not found");
      return;
    }

    setTimeout(() => {
      setMovement(tempMovement);
    }, 3000);
  }, []);

  const separateName = (
    name: string
  ): { firstName: string; lastName: string } => {
    const names = name.split(" ");

    if (names.length <= 1) {
      return { firstName: names[0], lastName: "" };
    }

    return { firstName: names[0], lastName: names[1] };
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="Detalle de movimiento" />
      {!movement ? (
        <LoadingView />
      ) : (
        <>
          <View style={styles.movementTransactionDetails}>
            <ContactAvatar
              firstName={separateName(movement.contactName as string).firstName}
              lastName={separateName(movement.contactName as string).lastName}
              styleProps={styles.contactAvatar}
            />
            <Text style={styles.contactNameText}>
              SINPE móvil - {movement.contactName}
            </Text>
            <Text style={styles.amountText}>
              {formatCurrency(movement.amount)}
            </Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Fecha</Text>
            <Text style={styles.detailsText}>
              {formatSinpeDate(movement.date)}
            </Text>
            <Text style={styles.subTitle}>Descripción</Text>
            <Text style={styles.detailsText}>{movement.description}</Text>
            <Text style={styles.subTitle}>Tipo de movimiento</Text>
            <Text style={styles.detailsText}>{movement.type}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  contactAvatar: {
    width: 55,
    height: 55,
    fontSize: 21,
    lineHeight: 55,
    borderRadius: 55,
  },
  movementTransactionDetails: {
    alignSelf: "center",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  contactNameText: {
    fontSize: 17,
    fontWeight: "400",
    color: "#3e3e3e",
    marginTop: 25,
  },
  amountText: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#3e3e3e",
    marginTop: 5,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "300",
    color: "#787878",
    marginTop: 40,
  },
  detailsText: {
    fontSize: 17,
    fontWeight: "400",
    color: "#3e3e3e",
    marginTop: 5,
  },
});
