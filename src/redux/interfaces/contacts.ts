import { type Contact as ContactItem } from 'react-native-contacts';

export interface Contact {
  data: ContactData[];
}

export interface ContactData extends ContactItem {
  isFavorite: boolean;
}
