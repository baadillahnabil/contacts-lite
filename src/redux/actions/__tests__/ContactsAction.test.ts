import { ACTION_TYPES, ACTIONS } from '@redux/actions/contacts';
import { type Contact } from '@redux/interfaces/contacts';

import { mockContactsData } from './__mocks__/contactsData.mock';

describe('Contacts Actions', () => {
  it('Given a list of contacts, When contactsSaveAll is called, Then it should create an action to save all contacts', () => {
    const payload: Contact['data'] = mockContactsData;
    const action = ACTIONS.contactsSaveAll(payload);

    expect(action).toEqual({
      type: ACTION_TYPES.CONTACTS_SAVE_ALL,
      payload,
    });
  });

  it('Given a contact ID, When contactsFavoriteUpdate is called, Then it should create an action to update the favorite status', () => {
    const payload = { recordId: '1' };
    const action = ACTIONS.contactsFavoriteUpdate(payload);

    expect(action).toEqual({
      type: ACTION_TYPES.CONTACTS_FAVORITE_UPDATE,
      payload,
    });
  });
});
