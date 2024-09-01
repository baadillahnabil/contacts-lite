import { StyleSheet } from 'react-native';

import { Colors } from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listContainer: {
    paddingLeft: 16,
  },

  titleContainer: {
    paddingVertical: 24,
    paddingLeft: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    backgroundColor: Colors.ui_grey_05,
    paddingVertical: 12,
  },

  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardImage: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});

export default styles;
