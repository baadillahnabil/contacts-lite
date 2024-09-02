import { useCallback, useState } from 'react';
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

const useContactPermission = () => {
  const [isRequesting, setIsRequesting] = useState(false);

  const requestPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      try {
        setIsRequesting(true);

        const response = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'ContactsLite would like to view your contacts.',
            buttonPositive: 'Accept',
          },
        );
        if (
          response === PermissionsAndroid.RESULTS.GRANTED ||
          response === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN
        ) {
          return true;
        }

        return false;
      } catch (e) {
        console.log(e);
      } finally {
        setIsRequesting(false);
      }
    } else if (Platform.OS === 'ios') {
      try {
        setIsRequesting(true);

        const isGranted = await Contacts.checkPermission();
        if (isGranted === 'authorized') return true;
        else {
          console.log('Requesting permission');
          const response = await Contacts.requestPermission();
          console.log('Requesting permission => ', response);
          if (response === 'authorized') return true;
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsRequesting(false);
      }
    }
  }, []);

  return { requestPermission, isRequesting };
};

export default useContactPermission;
