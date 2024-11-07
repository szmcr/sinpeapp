import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { CaretRightIcon } from "./CaretRightIcon";
import { ContactType } from "../types/types";

interface ContactCardProps {
  contact: ContactType;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { firstName, lastName, phoneNumbers } = contact;

  return (
    <View style={styles.contactsContainer}>
      <Text style={styles.contactImage}>
        {(firstName || "").substring(0, 1)}
        {(lastName || "").substring(0, 1)}
      </Text>
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>
          {firstName} {contact.lastName}
        </Text>
        <Text style={styles.subText}>
          {phoneNumbers?.[0]?.number || "Sin número"}
        </Text>
      </View>
      <View style={styles.contactIcon}>
        <CaretRightIcon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#C6C7FF",
    color: "#3130C6",
    textAlign: "center",
    lineHeight: 40,
    fontSize: 14,
  },
  contactsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    width: "100%",
    paddingVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingRight: 30,
  },
  contactIcon: {
    marginLeft: "auto",
  },
  contactDetails: {
    flexDirection: "column",
    gap: 5,
  },
  subText: {
    color: "#787878",
  },
  contactName: {
    fontSize: 16,
  },
});
