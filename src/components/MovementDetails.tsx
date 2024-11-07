import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { formatDate } from "../utils/formatDate";
import { formatCurrency } from "../utils/formatCurrencyUtils";
import { IMovementDetails } from "../types/types";
import { Link, useNavigation } from "expo-router";

interface MovementDetailsProps {
  item: IMovementDetails;
}

export default function MovementDetails({ item }: MovementDetailsProps) {
  return (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity style={styles.movementDetailsContainer}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={styles.simpleText}>
            SINPE móvil - {item.contactName}
          </Text>
          <Text style={styles.subText}>{formatDate(new Date(item.date))}</Text>
        </View>
        <Text style={styles.transferAmount}>
          - {formatCurrency(item.amount)}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
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
