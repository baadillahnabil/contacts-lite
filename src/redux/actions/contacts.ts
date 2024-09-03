import { Contact } from '@redux/interfaces/contacts';

// Action Types
const CONTACTS_SAVE_ALL = 'contacts/CONTACTS_SAVE_ALL';
const CONTACTS_FAVORITE_UPDATE = 'contacts/CONTACTS_FAVORITE_UPDATE';

// Action Creators
const contactsSaveAll = (payload: Contact['data']) => ({
  type: CONTACTS_SAVE_ALL,
  payload,
});
const contactsFavoriteUpdate = (payload: {
  recordId: Contact['data'][number]['recordID'];
}) => ({
  type: CONTACTS_FAVORITE_UPDATE,
  payload,
});

export const ACTION_TYPES = { CONTACTS_SAVE_ALL, CONTACTS_FAVORITE_UPDATE };
export const ACTIONS = { contactsSaveAll, contactsFavoriteUpdate };
