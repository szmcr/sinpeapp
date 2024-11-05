import { StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import RoundButton from "@/src/components/RoundButton";
import { Image } from "react-native-svg";
import MovementsList from "@/src/components/MovementsList";
import { formatCurrency } from "@/src/utils/formatCurrency";

const accountInfo = {
  balance: 36850,
};

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    fontSize: 16,
    color: "#3e3e3e",
    marginTop: 15,
  },
  btnContainer: {
    alignSelf: "center",
    marginTop: 15,
  },
  mainBalance: {
    fontSize: 40,
    fontWeight: "700",
    color: "#3e3e3e",
    marginTop: 10,
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
