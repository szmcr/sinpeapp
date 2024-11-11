import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { View } from "@/src/components/Themed";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useNavigation } from "expo-router";
import useContacts from "@/src/hooks/useContacts";
import { ContactListItem } from "@/src/types/types";
import { groupContactsByLetter } from "@/src/utils/groupContactsByLetter";
import CommonHeader from "@/src/components/CommonHeader";
import { SearchBarIcon } from "@/src/components/SearchBarIcon";
import ContactList from "@/src/components/ContactList";

export default function ContactSelection() {
  const { contacts } = useContacts();
  const [filteredContacts, setFilteredContacts] = useState<ContactListItem[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredContacts(groupContactsByLetter(contacts));
  }, [contacts]);

  const filterContacts = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setFilteredContacts(groupContactsByLetter(contacts));
      return;
    }

    const searchLower = searchTerm.toLowerCase().trim();

    const filtered = contacts.filter((contact) => {
      const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
      const phoneNumber =
        contact.phoneNumbers?.[0]?.number?.toString().replace(/\D/g, "") || "";

      return (
        fullName.includes(searchLower) || phoneNumber.includes(searchLower)
      );
    });

    setFilteredContacts(groupContactsByLetter(filtered));
  };

  const handleSearch = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const searchTerm = e.nativeEvent.text;
    setSearchTerm(searchTerm);

    filterContacts(searchTerm);
  };

  return (
    <View style={styles.container}>
      <CommonHeader title="Seleccioná un contacto" />
      <View style={styles.searchBarContainer}>
        <SearchBarIcon style={styles.searchIcon} />
        <TextInput
          placeholder="Buscá por nombre o número"
          value={searchTerm}
          style={styles.searchBar}
          onChange={handleSearch}
        />
      </View>
      <ContactList contactList={filteredContacts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  searchIcon: { marginTop: 5 },
  searchBarContainer: {
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
  },
  searchBar: {
    flex: 1,
    height: 60,
    fontSize: 16,
  },
});
