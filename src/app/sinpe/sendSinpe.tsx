import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import CommonHeader from "@/src/components/CommonHeader";
import ContactAvatar from "@/src/components/ContactAvatar";
import { formatPhoneNumber } from "@/src/utils/formatPhoneNumber";
import {
  addThousandSeparators,
  formatToNumeric,
} from "@/src/utils/formatCurrencyUtils";

export default function SendSinpe() {
  const { firstName, lastName, phoneNumber } = useLocalSearchParams();
  const [amount, setAmount] = useState("");

  const handleChange = (input: string) => {
    const numericInput = formatToNumeric(input);
    const formattedInput = addThousandSeparators(numericInput);
    setAmount(formattedInput);
  };

  const handleBlur = () => {
    if (!amount) return;

    const numericAmount = parseFloat(amount.replace(/,/g, ""));
    const formattedAmount = numericAmount.toFixed(2);
    const formattedWithThousands = addThousandSeparators(formattedAmount);

    setAmount(formattedWithThousands);
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="Enviar dinero" />
      <Text style={styles.labels}>Transferir a</Text>
      <View style={styles.receiverInfo}>
        <ContactAvatar
          firstName={firstName as string}
          lastName={lastName as string}
          styleProps={styles.contactAvatar}
        />
        <View>
          <Text style={styles.contactName}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.contactPhone}>
            {formatPhoneNumber(phoneNumber as string)}
          </Text>
        </View>
      </View>
      <Text style={styles.labels}>Monto</Text>
      <TextInput
        style={styles.input}
        value={`₡ ${amount}`}
        keyboardType="numeric"
        onChangeText={handleChange}
        onBlur={handleBlur}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  labels: {
    fontSize: 19,
    fontWeight: "700",
    color: "#4C51F7",
    alignSelf: "flex-start",
    marginTop: 25,
  },
  contactAvatar: {
    width: 55,
    height: 55,
    lineHeight: 55,
    borderRadius: 55,
    marginVertical: 20,
    fontSize: 24,
  },
  receiverInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  contactName: {
    fontSize: 21,
    fontWeight: "400",
  },
  contactPhone: {
    fontSize: 15,
    marginTop: 5,
    color: "#4C51F7",
    fontWeight: "400",
  },
  input: {
    width: "90%",
    height: 60,
    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 25,
    fontSize: 17,
  },
});
