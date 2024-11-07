import { View, Text, SectionList, StyleSheet } from "react-native";
import React from "react";
import ContactCard from "./ContactCard";
import * as Contacts from "expo-contacts";
import { ContactListItem } from "../types/types";

interface ContactListProps {
  contactList: ContactListItem[];
}

export default function ContactList({ contactList }: ContactListProps) {
  return (
    <SectionList
      style={{ width: "100%" }}
      sections={contactList}
      keyExtractor={(item) => item.id?.toString() || ""}
      renderItem={({ item }) => <ContactCard contact={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.contactSectionHeader}>
          <Text style={{ color: "#4C51F7" }}>{title.toUpperCase()}</Text>
        </View>
      )}
      renderSectionFooter={() => <View style={styles.divider} />}
    />
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 10,
    margin: 10,
    borderBottomColor: "#4C51F7",
    borderBottomWidth: 1,
  },
  contactSectionHeader: {
    height: 30,
    justifyContent: "center",
    paddingLeft: 25,
  },
});
