import {
  FlatList,
  Image,
  NativeSyntheticEvent,
  PermissionsAndroid,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
} from "react-native";
import * as Contacts from "expo-contacts";
import { Text, View } from "@/src/components/Themed";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SearchBarIcon } from "../components/SearchBarIcon";
import { CaretRightIcon } from "../components/CaretRightIcon";
import { Stack, useNavigation } from "expo-router";

export default function ContactSelection() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Contacts.requestPermissionsAsync()
      .then((res) => {
        if (res.granted) {
          Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
            sort: Contacts.SortTypes.LastName,
          })
            .then((contacts) => {
              console.log("Contacts: ", contacts.data);

              setContacts(contacts.data);
              setFilteredContacts(contacts.data);
            })
            .catch((e) => {
              console.log("Error loading contacts: ", e);
            });
        } else {
          console.log("Permission denied");
        }
      })
      .catch((error) => {
        console.error("Permission error: ", error);
      });
  }, []);

  const filterContacts = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setFilteredContacts(contacts);
      return;
    }
    const filtered = contacts.filter((contact) => {
      const firstName = contact.firstName || "";
      const lastName = contact.lastName || "";
      const name = `${firstName} ${lastName}`.toLowerCase();
      const phoneNumber =
        contact.phoneNumbers?.[0]?.number?.toString().replace(/\D/g, "") || "";

      console.log("S " + contact.name.includes(searchTerm.toLowerCase()));

      return (
        contact.name.includes(searchTerm.toLowerCase()) ||
        phoneNumber.includes(searchTerm.replace(/\D/g, ""))
      );
    });
    setFilteredContacts(filtered);
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
        }}
      />
      <View style={styles.searchBarContainer}>
        <SearchBarIcon />
        <TextInput
          placeholder="Buscá por nombre o número"
          value={searchTerm}
          style={styles.searchBar}
          onChange={handleSearch}
        />
      </View>
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactsContainer}>
            <Text style={styles.contactImage}>
              {(item.firstName || "").substring(0, 1)}
              {(item.lastName || "").substring(0, 1)}
            </Text>
            <View style={styles.contactDetails}>
              <Text style={styles.contactName}>
                {item.firstName} {item.lastName}
              </Text>
              <Text style={styles.subText}>
                {item.phoneNumbers?.[0]?.number || "Sin número"}
              </Text>
            </View>
            <View style={styles.contactIcon}>
              <CaretRightIcon />
            </View>
          </View>
        )}
      />
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
    width: "90%",
    paddingVertical: 10,
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
