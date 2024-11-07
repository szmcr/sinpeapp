import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CaretRightIcon } from "./CaretRightIcon";
import { ContactType } from "../types/types";
import { Link, useNavigation } from "expo-router";
import ContactAvatar from "./ContactAvatar";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

interface ContactCardProps {
  contact: ContactType;
}

export default function ContactCard({ contact }: ContactCardProps) {
  const { firstName, lastName, phoneNumbers } = contact;

  return (
    <Link
      href={{
        pathname: "/sinpe/sendSinpe",
        params: {
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumbers?.[0].number,
        },
      }}
      asChild
    >
      <TouchableOpacity>
        <View style={styles.contactsContainer}>
          <ContactAvatar
            firstName={firstName || ""}
            lastName={lastName || "?"}
          />
          <View style={styles.contactDetails}>
            <Text style={styles.contactName}>
              {firstName} {contact.lastName}
            </Text>
            <Text style={styles.subText}>
              {formatPhoneNumber(phoneNumbers?.[0]?.number) || "Sin número"}
            </Text>
          </View>
          <View style={styles.contactIcon}>
            <CaretRightIcon />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
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
