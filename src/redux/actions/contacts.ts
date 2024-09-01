import { type Contact } from 'react-native-contacts';

// Action Types
const CONTACTS_SAVE_ALL = 'contacts/CONTACTS_SAVE_ALL';

// Action Creators
const contactsSaveAll = (payload: Contact[]) => ({
  type: CONTACTS_SAVE_ALL,
  payload,
});

export const ACTION_TYPES = { CONTACTS_SAVE_ALL };
export const ACTIONS = { contactsSaveAll };
