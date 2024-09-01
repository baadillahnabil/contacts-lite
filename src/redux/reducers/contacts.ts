import createReducer from '@utils/createReducer';
import { ACTION_TYPES, ACTIONS } from '@redux/actions/contacts';
import { type Contact } from '@redux/interfaces/contacts';

export const INITIAL_STATE: Contact = {
  data: [],
};

export default createReducer(INITIAL_STATE, {
  [ACTION_TYPES.CONTACTS_SAVE_ALL]: (state, action) => {
    const { payload } = action as Pick<
      ReturnType<typeof ACTIONS.contactsSaveAll>,
      'payload'
    >;

    state.data = payload.map(contact => ({ ...contact, isFavorite: false }));
  },
});
