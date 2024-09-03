import { COLORS } from '@constants';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 200,
  },
  thumbnailContainer: {
    width: Dimensions.get('window').width,
    height: 250,
    backgroundColor: '#ACB0B9',
  },
  thumbnailHeader: {
    padding: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  thumbnailImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnailImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute',
    top: -30,
  },
  thumbnailTextContainer: {
    backgroundColor: COLORS.ui_grey_50,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    position: 'absolute',
    top: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  thumbnailText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
  },

  nameDetailContainer: {
    paddingVertical: 16,
    marginTop: 60,
  },
  job: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
    marginTop: 4,
  },
  name: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    color: '#fff',
    marginTop: 8,
  },

  listContainer: {
    marginBottom: 260,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    backgroundColor: COLORS.ui_grey_05,
    padding: 16,
  },
  separator: {
    height: 1,
    marginHorizontal: 16,
    backgroundColor: COLORS.ui_grey_20,
  },
  detailCard: {
    marginHorizontal: 12,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  detailCardTitle: {
    marginBottom: 4,
  },
  detailCardDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0096FF',
  },
});

export default styles;
