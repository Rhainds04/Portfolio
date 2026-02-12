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
  formLabel: {
    color: '#39FF14',
    fontSize: 30,
    padding: 10,
    fontFamily: 'pixelFont',
  },
  formField: {
    color: '#39FF14',
    fontSize: 20,
    padding: 10,
    fontFamily: 'pixelFont',
    borderWidth: 2,
    borderColor: '#39FF14',
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
  sideBarActions: {
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'space-between',
    width: '70%',
  },
  searchBar: {
    flex: 1,
    minWidth: 135,
    borderWidth: 3,
    borderColor: '#39FF14',
    padding: 5,
    color: '#39FF14',
    margin: 2,
    fontSize: 16,
  },
  SearchBtn: {
    borderWidth: 3,
    borderColor: '#39FF14',
    padding: 5,
    margin: 2,
  },
  filterBtn: {
    borderWidth: 3,
    borderColor: '#39FF14',
    padding: 5,
    margin: 2,
  },
  addBtn: {
    borderWidth: 3,
    borderColor: '#39FF14',
    padding: 5,
    margin: 2,
  },
  icon: {
    color: '#39FF14',
  },
  mainContent: {
    flex: 4,
    height: '100%',
    width: '70%',
  },
  formImageSelector: {
    aspectRatio: 1,
    borderWidth: 3,
    borderColor: '#39FF14',
  },
  languagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 2,
    margin: 5,
    justifyContent: 'space-between',
  },
  languageBtn: {
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderWidth: 2,
    borderColor: '#39FF14',
    margin: 4,
  },
});
