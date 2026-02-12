import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#39FF14',
    fontSize: 25,
    padding: 10,
    fontFamily: 'pixelFont',
  },
  whiteText: {
    color: 'white',
  },
  hoveredText: {
    fontSize: 28,
  },
  navbar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: '#39FF14',
  },
  navBarItem: {
    margin: 10,
  },
  navBarItemHovered: {
    margin: 7,
  },
  pageContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});