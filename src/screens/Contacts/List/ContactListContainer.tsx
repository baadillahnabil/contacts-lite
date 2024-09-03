import { useState, useEffect, useCallback, memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Contacts from 'react-native-contacts';
import { useNavigation } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { type AppStackParamList } from '@routes';
import { ACTIONS } from '@redux/actions/contacts';
import { useContactPermission } from '@helpers/hooks';

import { selectContactListData } from './ContactListSelector';
import ContactListView, { type ViewProps } from './ContactListView';

type NavigationType = NativeStackScreenProps<
  AppStackParamList,
  'ContactList'
>['navigation'];

const ContactListContainer = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NavigationType>();
  const { isRequesting, requestPermission } = useContactPermission();
  const { contacts } = useSelector(selectContactListData, shallowEqual);

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

  const handleSelectedContact: ViewProps['handleSelectedContact'] = useCallback(
    id => {
      navigate('ContactDetail', { recordId: id });
    },
    [],
  );

  return (
    <ContactListView
      contacts={contacts}
      isLoading={isRequesting || isGettingContacts}
      isGranted={isGranted}
      handleOnRefresh={getContacts}
      handleSelectedContact={handleSelectedContact}
    />
  );
};

export default memo(ContactListContainer);
