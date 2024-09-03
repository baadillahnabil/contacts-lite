import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { type AppStackParamList } from '@routes';

import { selectContactDetailData } from './ContactDetailSelector';
import ContactDetailView from './ContactDetailView';

type RouteType = NativeStackScreenProps<
  AppStackParamList,
  'ContactDetail'
>['route'];
type NavigationType = NativeStackScreenProps<
  AppStackParamList,
  'ContactDetail'
>['navigation'];

const ContactDetailContainer = () => {
  const route = useRoute<RouteType>();
  const navigation = useNavigation<NavigationType>();
  const { selectedContact } = useSelector(
    selectContactDetailData(route.params.recordId),
    shallowEqual,
  );

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <ContactDetailView
      selectedContact={selectedContact}
      handleBack={handleBack}
    />
  );
};

export default memo(ContactDetailContainer);
