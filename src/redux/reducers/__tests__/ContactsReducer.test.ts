import contactsReducer, { INITIAL_STATE } from '@redux/reducers/contacts';
import { ACTIONS } from '@redux/actions/contacts';

import { mockContactsData } from './__mocks__/contactsData.mock';

describe('Contacts Reducer', () => {
  it('Given no state, When the reducer is called with an undefined action, Then it should return the initial state', () => {
    const newState = contactsReducer(undefined, { type: 'UNDEFINED_ACTION' });
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('Given a list of contacts, When the reducer handles CONTACTS_SAVE_ALL, Then it should save the contacts to the state', () => {
    const payload = mockContactsData;
    const action = ACTIONS.contactsSaveAll(payload);
    const newState = contactsReducer(INITIAL_STATE, action);

    expect(newState.data).toEqual(payload);
  });

  it('Given an initial state, When the reducer handles CONTACTS_FAVORITE_UPDATE, Then it should toggle the favorite status of the contact', () => {
    const initialState = {
      data: mockContactsData,
    };
    const action = ACTIONS.contactsFavoriteUpdate({ recordId: '1' });
    const newState = contactsReducer(initialState, action);

    expect(newState.data[0].isStarred).toBe(true);
    expect(newState.data[1].isStarred).toBe(false);
  });
});
