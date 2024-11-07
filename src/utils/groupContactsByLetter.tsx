import { ContactListItem, ContactType } from "../types/types";

export const groupContactsByLetter = (
  contacts: ContactType[]
): ContactListItem[] => {
  const groupedContacts: { [key: string]: ContactType[] } = {};

  for (const contact of contacts) {
    const currentWord = contact.lastName || contact.firstName;
    if (!currentWord) continue;

    const firstChar = currentWord[0].toLowerCase();

    if (!groupedContacts[firstChar]) {
      groupedContacts[firstChar] = [];
    }
    groupedContacts[firstChar].push(contact);
  }

  const result = Object.keys(groupedContacts)
    .sort()
    .map((letter) => ({
      title: letter,
      data: groupedContacts[letter],
    }));

  return result;
};
