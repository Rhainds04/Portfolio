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
    fontSize: 20,
    fontFamily: 'pixelFont',
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
  //FORM STYLES
  formContainer: {
    flex: 1,
  },
  formSelectionBtnBox: {
    flexDirection: 'row',
  },
  formSelectionBtn: {
    borderWidth: 2,
    borderColor: '#39FF14',
    width: '20%',
    alignItems: 'center',
    margin: 5,
  },
  fieldContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  submitBtnContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  submitBtn: {
    borderWidth: 2,
    borderColor: '#39FF14',
    width: '40%',
    alignItems: 'center',
    margin: 5,
  },
  goBackBtn: {
    fontSize: 25,
    margin: 5,
  },
  textField: {
    borderWidth: 2,
    borderColor: '#39FF14',
    color: '#39FF14',
    fontSize: 20,
    width: 220,
    padding: 2,
    margin: 2,
    fontFamily: 'pixelFont',
  },
  imageUploadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flex: 1,
  },
  imageSelectBtn: {
    borderWidth: 2,
    borderColor: '#39FF14',
<<<<<<< HEAD
    height: 160,
    width: 150,
=======
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#39FF14',
>>>>>>> 485a38ecf24c4d11966a1ec65b16ada5fa4a3154
  },
});
