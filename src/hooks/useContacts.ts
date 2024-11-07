import { useEffect, useState } from 'react'
import * as Contacts from "expo-contacts";
import { ContactType } from '../types/types';

export default function useContacts() {
    const [contacts, setContacts] = useState<ContactType[]>([]);

    useEffect(() => {
        Contacts.requestPermissionsAsync()
            .then((res) => {
                if (res.granted) {
                    Contacts.getContactsAsync({
                        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                        sort: Contacts.SortTypes.LastName,
                    })
                        .then(({ data }) => {
                            const contacts = data;
                            setContacts(contacts);
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
    }, [])

    return {
        contacts,
    }
}