import { selectContactListData } from '@screens/Contacts/List/ContactListSelector';

import {
  mockContactsSingleFavoriteData,
  mockContactsNoFavoriteData,
} from './__mocks__/contactsData.mock';

describe('ContactListSelector', () => {
  const mockState = {
    ContactsReducer: {
      data: mockContactsSingleFavoriteData,
    },
  };

  it('Given contacts, When some are starred, Then it should return a section for "Favorites" and sort the others alphabetically', () => {
    const result = selectContactListData(mockState);

    expect(result.contacts[0].title).toBe('Favorites');
    expect(result.contacts[0].data).toEqual(
      mockContactsSingleFavoriteData.filter(contact => contact.isStarred),
    );

    expect(result.contacts[1].title).toBe('A');
    expect(result.contacts[2].title).toBe('B');
    expect(result.contacts[3].title).toBe('C');
  });

  it('Given no starred contacts, When contacts are provided, Then it should only return alphabetically sorted sections without "Favorites"', () => {
    const stateWithoutStarredContacts = {
      ContactsReducer: {
        data: mockContactsNoFavoriteData,
      },
    };

    const result = selectContactListData(stateWithoutStarredContacts);
    expect(result.contacts[0].title).toBe('B');
    expect(result.contacts[1].title).toBe('C');
  });
});
