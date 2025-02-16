import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const s = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  mainContainer: {
    flex: 1,
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 10,
  },
  sideColumn: {
    flex: 1,
    flexDirection: width > 768 ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
  },
  centerBox: {
    flex: 1,
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    margin: 5,
  },
});
