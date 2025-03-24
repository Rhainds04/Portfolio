import { StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';

export const HoverableItem = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      style={[s.navigationItem, isHovered && s.hoveredItem]}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
    />
  );
};

export const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  mobileContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'left',
    color: '#39FF14',
    fontFamily: 'pixelFont',
  },
  //Navigation
  navigationContainer: {
    flexDirection: 'column',
    height: '90%',
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationItem: {
    position: 'relative',
    width: '90%',
    height: '20%',
    borderWidth: 3,
    margin: 5,
  },
  hoveredItem: {
    width: '100%',
    transform: [{ rotate: '1deg' }],
  },
  greenBorder: {
    borderColor: '#39FF14',
  },
  whiteBorder: {
    borderColor: '#ffffff',
  },
  //Game
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '70%',
    height: '90%',
  },
  gameBoard: {
    width: '55%',
    height: '100%',
    margin: 3,
  },
  //Side menu
  sideMenuContainer: {
    height: '100%',
    width: '400px',
    justifyContent: 'center',
  },
  sideMenuItem: {
    position: 'relative',
    width: '100%',
    margin: 5,
  },
  gameStatus: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
    borderWidth: 3,
    borderColor: '#39FF14',
    justifyContent: 'space-between',
  },
  gameStatusImages: {
    width: '35%',
    flexDirection: 'row',
  },
  gameScoreContainer: {
    justifyContent: 'space-around',
    alignContent: 'space-around',
    height: '90%',
    width: '30%',
    margin: 5,
  },
  sideMenuItem2: {
    height: '66%',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  gridItem: {
    width: '49%',
    height: '49%',
    borderWidth: 3,
    borderColor: '#39FF14',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
