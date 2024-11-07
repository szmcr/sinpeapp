import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import { View } from "@/src/components/Themed";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SearchBarIcon } from "../components/SearchBarIcon";
import { Stack, useNavigation } from "expo-router";
import useContacts from "../hooks/useContacts";
import ContactList from "../components/ContactList";
import { ContactListItem } from "../types/types";
import { groupContactsByLetter } from "../utils/groupContactsByLetter";

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
    const filtered = contacts.filter((contact) => {
      const firstName = contact.firstName || "";
      const lastName = contact.lastName || "";
      const name = `${firstName} ${lastName}`.toLowerCase();
      const phoneNumber =
        contact.phoneNumbers?.[0]?.number?.toString().replace(/\D/g, "") || "";

      return (
        contact.name.includes(searchTerm.toLowerCase()) ||
        phoneNumber.includes(searchTerm.replace(/\D/g, ""))
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
      <Stack.Screen
        options={{
          presentation: "modal",
          headerLeft: () => {
            const navigation = useNavigation();
            return (
              <Ionicons
                name="arrow-back"
                size={24}
                color="#4C51F7"
                style={{ marginLeft: 0 }}
                onPress={() => navigation.goBack()}
              />
            );
          },
          headerTitle: "Seleccioná un contacto",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#4C51F7" },
          headerShadowVisible: false,
        }}
      />
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
