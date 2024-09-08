import { renderHook, act } from '@testing-library/react-hooks';
import { PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';

import useContactPermission from '@helpers/hooks/useContactPermission';

jest.mock(
  'react-native/Libraries/PermissionsAndroid/PermissionsAndroid',
  () => ({
    request: jest.fn(),
    PERMISSIONS: {
      READ_CONTACTS: 'android.permission.READ_CONTACTS',
    },
    RESULTS: {
      GRANTED: 'granted',
      DENIED: 'denied',
      NEVER_ASK_AGAIN: 'never_ask_again',
    },
  }),
);

jest.mock('react-native-contacts', () => ({
  checkPermission: jest.fn(),
  requestPermission: jest.fn(),
}));

describe('useContactPermission Hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Given the user is on Android, When the permission is granted, Then it should return true', async () => {
    Platform.OS = 'android';
    jest
      .spyOn(PermissionsAndroid, 'request')
      .mockResolvedValue(PermissionsAndroid.RESULTS.GRANTED);

    const { result } = renderHook(() => useContactPermission());

    await act(async () => {
      const granted = await result.current.requestPermission();
      expect(granted).toBe(true);
    });

    expect(result.current.isRequesting).toBe(false);
  });

  it('Given the user is on Android, When the permission is denied, Then it should return false', async () => {
    Platform.OS = 'android';
    jest
      .spyOn(PermissionsAndroid, 'request')
      .mockResolvedValue(PermissionsAndroid.RESULTS.DENIED);

    const { result } = renderHook(() => useContactPermission());

    await act(async () => {
      const granted = await result.current.requestPermission();
      expect(granted).toBe(false);
    });

    expect(result.current.isRequesting).toBe(false);
  });

  it('Given the user is on iOS, When the permission is granted, Then it should return true', async () => {
    Platform.OS = 'ios';
    jest.spyOn(Contacts, 'checkPermission').mockResolvedValue('denied');
    jest.spyOn(Contacts, 'requestPermission').mockResolvedValue('authorized');

    const { result } = renderHook(() => useContactPermission());

    await act(async () => {
      const granted = await result.current.requestPermission();
      expect(granted).toBe(true);
    });

    expect(result.current.isRequesting).toBe(false);
    expect(Contacts.checkPermission).toHaveBeenCalled();
    expect(Contacts.requestPermission).toHaveBeenCalled();
  });

  it('Given the user is on iOS, When the permission is denied, Then it should return false', async () => {
    Platform.OS = 'ios';
    jest.spyOn(Contacts, 'checkPermission').mockResolvedValue('denied');
    jest.spyOn(Contacts, 'requestPermission').mockResolvedValue('denied');

    const { result } = renderHook(() => useContactPermission());

    await act(async () => {
      const granted = await result.current.requestPermission();
      expect(granted).toBe(false);
    });

    expect(result.current.isRequesting).toBe(false);
  });
});
