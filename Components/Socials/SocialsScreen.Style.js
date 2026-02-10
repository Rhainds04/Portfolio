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
  icon: {
    color: '#39FF14',
    textAlign: 'center',
  },
  hoveredText: {
    fontSize: 28,
  },
  navBar: {
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    height: 150,
    width: 650,
    margin: 20,
  },
  backgroundImage: {
    flex: 1,
    height: '100%',
    resizeMode: 'cover', // Changed from 'contain' to 'cover'
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  cardText: {
    color: '#39FF14',
    fontSize: 30,
    padding: 5,
    fontFamily: 'pixelFont',
  },
});
