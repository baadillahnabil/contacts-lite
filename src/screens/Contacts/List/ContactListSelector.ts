import { createSelector } from 'reselect';

import { AppState } from '@redux/stores/configureStore';
import type { Contact as ContactStoreInterface } from '@redux/interfaces/contacts';

export const selectContactListData = createSelector(
  [({ ContactsReducer }: AppState) => ContactsReducer],
  ContactsReducer => {
    const sectionedData = ContactsReducer.data.reduce<
      Record<string, ContactStoreInterface['data']>
    >((acc, contact) => {
      const { givenName } = contact;
      const [firstLetter] = givenName;

      return Object.assign(acc, {
        [firstLetter]: [...(acc[firstLetter] || []), contact],
      });
    }, {});

    const formattedData = Object.entries(sectionedData)
      .sort(([titleA], [titleB]) => titleA.localeCompare(titleB))
      .map(([title, data]) => ({
        title,
        data: data.sort((a, b) => a.givenName.localeCompare(b.givenName)),
      }));

    return {
      contacts: formattedData,
    };
  },
);

export type PropsFromSelector = ReturnType<typeof selectContactListData>;
