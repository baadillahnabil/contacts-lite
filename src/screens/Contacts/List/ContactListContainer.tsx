import React, { useCallback, useEffect } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { ACTIONS } from '@redux/actions/contacts';

import { selectContactsData } from './ContactListSelector';
import ContactListView from './ContactListView';

const ContactListContainer = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContactsData, shallowEqual);

  const getContacts = useCallback(async () => {
    try {
      const response = await Contacts.getAll();
      dispatch(ACTIONS.contactsSaveAll(response));
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'ContactsLite would like to view your contacts.',
        buttonPositive: 'Accept',
      })
        .then(granted => {
          if (granted) {
            getContacts();
          }
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      getContacts();
    }
  }, [dispatch, getContacts]);

  return <ContactListView contacts={contacts} />;
};

export default ContactListContainer;
