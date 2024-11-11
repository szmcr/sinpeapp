import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Text } from "@/src/components/Themed";
import RoundButton from "@/src/components/RoundButton";
import MovementsList from "@/src/components/MovementsList";
import { formatCurrency } from "@/src/utils/formatCurrencyUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { AccountInfo } from "../types/types";
import WinkLogo from "../components/WinkLogo";
import LoadingView from "../components/LoadingView";
import axios from "axios";
import { API_URL } from "../constants/API";
import { useFetch } from "../hooks/useFetch";

export default function AccountScreen() {
  const { data: accountInfo, refreshing, fetch } = useFetch(`/account-balance`);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Stack.Screen
          options={{
            headerTitle: "",
            headerShadowVisible: false,
            headerLeft: () => <WinkLogo />,
          }}
        />
        {!accountInfo ? (
          <LoadingView />
        ) : (
          <View style={{ minWidth: "100%" }}>
            <ScrollView
              refreshControl={
                <RefreshControl
                  colors={["#4c51f7"]}
                  progressBackgroundColor={"#fff"}
                  refreshing={refreshing}
                  onRefresh={() => fetch("/account-balance")}
                />
              }
              scrollEnabled={false}
              style={{ maxHeight: "25%" }}
            >
              <Text style={styles.accountName}>Cuenta Colones</Text>
              <View style={styles.subContainer}>
                <Text style={styles.subtext}>Saldo disponible</Text>
                <Text style={styles.mainBalance}>
                  {formatCurrency(accountInfo.balance)}
                </Text>
                <Text style={styles.subtext}>¿Qué querés hacer?</Text>
              </View>
            </ScrollView>
            <View style={styles.btnContainer}>
              <RoundButton />
              <Text style={styles.mainBtnText}>SINPE móvil</Text>
            </View>
            <MovementsList />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  innerContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  subContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  accountName: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#4c51f7",
  },
  subtext: {
    fontSize: 15,
    color: "#3e3e3e",
    marginTop: 15,
  },
  btnContainer: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    textAlign: "center",
    alignSelf: "stretch",
  },
  mainBalance: {
    fontSize: 40,
    fontWeight: "700",
    color: "#3e3e3e",
    marginTop: 10,
    marginBottom: 10,
  },
  mainBtnText: {
    fontSize: 16,
    color: "#4c51f7",
    fontWeight: "bold",
    marginTop: 10,
    width: 80,
    textAlign: "center",
  },
});
