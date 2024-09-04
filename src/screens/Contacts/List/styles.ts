import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '@constants';

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
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.dark_mode_bg,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.black,
    backgroundColor: COLORS.ui_grey_05,
    paddingVertical: 12,
  },

  itemContainer: {
    borderBottomWidth: 1,
    borderColor: COLORS.light_grey_bg,
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
    backgroundColor: COLORS.ui_grey_100,
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.black,
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: COLORS.ui_grey_110,
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    paddingRight: 16,
    height: Dimensions.get('window').height - 400,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.ui_grey_110,
    textAlign: 'center',
    marginTop: 12,
  },
  emptyBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
