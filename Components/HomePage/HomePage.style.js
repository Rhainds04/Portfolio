import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    borderWidth: 5,
  },
  withMargin: {
    margin: 5,
  },
  greenBorder: {
    borderColor: '#39FF14',
  },
  whiteBorder: {
    borderColor: '#ffffff',
  },
  text: {
    color: '#39FF14',
    padding: 10,
  },
  title: {
    fontSize: 50,
    fontFamily: 'Jersey10Regular',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  mainContainer: {
    flex: 1,
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 10,
    backgroundColor: 'black',
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
