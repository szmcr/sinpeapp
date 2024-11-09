import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import RoundButton from "@/src/components/RoundButton";
import MovementsList from "@/src/components/MovementsList";
import { formatCurrency } from "@/src/utils/formatCurrencyUtils";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { AccountInfo } from "../types/types";
import WinkLogo from "../components/WinkLogo";

import { useFonts } from "expo-font";
import LoadingView from "../components/LoadingView";

export default function AccountScreen() {
  const [accountInfo, setAccountInfo] = useState<AccountInfo>({ balance: 0 });

  useEffect(() => {
    /* TODO FETCH INFO DE LA CUENTA */
    setTimeout(() => {
      setAccountInfo({
        balance: Math.floor(Math.random() * 100000),
      });
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
          headerLeft: () => <WinkLogo />,
        }}
      />
      {!accountInfo.balance ? (
        <LoadingView />
      ) : (
        <View>
          <Text style={styles.accountName}>Cuenta Colones</Text>
          <View style={styles.subContainer}>
            <Text style={styles.subtext}>Saldo disponible</Text>
            <Text style={styles.mainBalance}>
              {formatCurrency(accountInfo.balance)}
            </Text>
            <Text style={styles.subtext}>¿Qué querés hacer?</Text>
          </View>
          <View style={styles.btnContainer}>
            <RoundButton />
            <Text style={styles.mainBtnText}>SINPE móvil</Text>
          </View>
          <MovementsList />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
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
    alignSelf: "center",
    marginTop: 15,
    alignItems: "center",
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
