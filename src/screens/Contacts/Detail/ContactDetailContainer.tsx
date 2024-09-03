import { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useRoute, useNavigation } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import { type AppStackParamList } from '@routes';
import { ACTIONS } from '@redux/actions/contacts';

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

  const dispatch = useDispatch();
  const { selectedContact } = useSelector(
    selectContactDetailData(route.params.recordId),
    shallowEqual,
  );

  const handleBack = () => {
    navigation.goBack();
  };

  const handleFavorite = () => {
    dispatch(ACTIONS.contactsFavoriteUpdate({ recordId: selectedContact.id }));
  };

  return (
    <ContactDetailView
      selectedContact={selectedContact}
      handleBack={handleBack}
      handleFavorite={handleFavorite}
    />
  );
};

export default memo(ContactDetailContainer);
