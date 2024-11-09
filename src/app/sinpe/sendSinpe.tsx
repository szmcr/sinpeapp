import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import CommonHeader from "@/src/components/CommonHeader";
import {
  addThousandSeparators,
  formatToNumeric,
  removeThousandSeparators,
} from "@/src/utils/formatCurrencyUtils";
import SinpeContactInfo from "@/src/components/SinpeContactInfo";

interface SendSinpeFormErrors {
  amount?: string;
  detail?: string;
}

export default function SendSinpe() {
  const { firstName, lastName, phoneNumber } = useLocalSearchParams();
  const [amount, setAmount] = useState<string>("");
  const [detail, setDetail] = useState("SINPE Móvil");
  const [errors, setErrors] = useState<SendSinpeFormErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (input: string) => {
    const numericInput = formatToNumeric(input);
    const formattedInput = addThousandSeparators(numericInput);
    setAmount(`${formattedInput}`);
  };

  const handleBlur = () => {
    if (!amount) return;

    const numericAmount = parseFloat(amount.replace(/,/g, ""));
    const formattedAmount = numericAmount.toFixed(2);
    const formattedWithThousands = addThousandSeparators(formattedAmount);

    setAmount(formattedWithThousands);
  };

  const handleFocus = () => {
    setAmount("");
  };

  const validateForm = () => {
    const newErrors: SendSinpeFormErrors = {};

    if (!amount || removeThousandSeparators(amount) <= 0) {
      newErrors.amount = !amount
        ? "El monto es requerido"
        : "El monto debe ser mayor a 0";
    }

    if (!detail) {
      newErrors.detail = "El detalle es requerido";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [amount, detail]);

  return (
    <View style={styles.container}>
      <CommonHeader title="Enviar dinero" />
      <Text style={styles.labels}>Transferir a</Text>
      <SinpeContactInfo
        firstName={firstName as string}
        lastName={lastName as string}
        phoneNumber={phoneNumber as string}
      />
      <Text style={styles.labels}>Monto</Text>
      <TextInput
        style={styles.input}
        value={`₡${amount}`}
        keyboardType="numeric"
        onChangeText={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <Text style={styles.labels}>Detalle</Text>
      <TextInput
        style={styles.input}
        onChange={(e) => setDetail(e.nativeEvent.text)}
        value={detail}
      />

      {errors.amount && <Text style={styles.error}>{errors.amount}</Text>}
      {errors.detail && <Text style={styles.error}>{errors.detail}</Text>}

      <KeyboardAvoidingView
        style={styles.btnContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <TouchableOpacity
          style={[styles.confirmBtn, { opacity: isFormValid ? 1 : 0.5 }]}
          disabled={!isFormValid}
        >
          <Text style={styles.confirmBtnText}>Confirmar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 60,
    borderColor: "#CECECE",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    marginVertical: 15,
    fontSize: 17,
  },
  btnContainer: {
    width: "100%",
    flex: 1,
    alignSelf: "center",
    marginTop: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  confirmBtn: {
    width: "100%",
    height: 60,
    backgroundColor: "#4C51F7",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  confirmBtnText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "700",
  },
  error: {
    color: "red",
    fontSize: 15,
    marginBottom: 10,
  },
});
