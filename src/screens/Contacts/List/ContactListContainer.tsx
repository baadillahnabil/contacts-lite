import React, { useState, useEffect, useCallback, memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';

import { ACTIONS } from '@redux/actions/contacts';
import { useContactPermission } from '@helpers/hooks';

import { selectContactsData } from './ContactListSelector';
import ContactListView from './ContactListView';

const ContactListContainer = () => {
  const dispatch = useDispatch();
  const { isRequesting, requestPermission } = useContactPermission();
  const { contacts } = useSelector(selectContactsData, shallowEqual);

  const [isGranted, setIsGranted] = useState(false);
  const [isGettingContacts, setIsGettingContacts] = useState(false);

  useEffect(() => {
    getPermission();
  }, []);

  const getPermission = async () => {
    try {
      const permission = await requestPermission();
      if (permission) {
        await getContacts();
        setIsGranted(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = useCallback(async () => {
    try {
      setIsGettingContacts(true);
      const response = await Contacts.getAll();
      dispatch(ACTIONS.contactsSaveAll(response));
    } catch (e) {
      console.log(e);
    } finally {
      setIsGettingContacts(false);
    }
  }, [dispatch]);

  return (
    <ContactListView
      contacts={contacts}
      isLoading={isRequesting || isGettingContacts}
      isGranted={isGranted}
      handleOnRefresh={getContacts}
    />
  );
};

export default memo(ContactListContainer);
