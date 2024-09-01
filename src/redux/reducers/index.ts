import { combineReducers } from 'redux';

import ContactsReducer from '@redux/reducers/contacts';

export const rootReducer = combineReducers({ ContactsReducer });
