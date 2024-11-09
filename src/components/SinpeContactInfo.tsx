import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ContactAvatar from "./ContactAvatar";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

interface SinpeContactInfoProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export default function SinpeContactInfo({
  firstName,
  lastName,
  phoneNumber,
}: SinpeContactInfoProps) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
});
