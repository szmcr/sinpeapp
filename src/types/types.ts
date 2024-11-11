import * as Contacts from 'expo-contacts';

export type ContactType = Contacts.Contact;

export interface IMovementDetails {
    id: string;
    date: string;
    amount: number;
    contactName: string;
    phoneNumber: string;
    description?: string;
    type?: string;
}

export type AccountInfo = {
    balance: number;
};

export type ContactListItem = {
    title: string;
    data: ContactType[];
};
