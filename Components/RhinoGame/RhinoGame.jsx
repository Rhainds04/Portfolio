import { View, Platform, Text, Pressable, ImageBackground } from 'react-native';
import { s } from './RhinoGameScreen.Style';
import rhinoGame from './Game/rhinoGame.html';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

//NavBar GIF and PNG
import HomePageMenuItemGif from '../../assets/imagesRhinoGame/HomePageMenuItem.gif';
import HomePageMenuItemHoverImage from '../../assets/imagesRhinoGame/HomePageMenuItemHover.png';

import ChatPageMenuItemGif from '../../assets/imagesRhinoGame/ChatPageMenuItem.gif';
import ChatPageMenuItemHoverImage from '../../assets/imagesRhinoGame/ChatPageMenuItemHover.png';

//Game images
import playerHealth0 from '../../assets/imagesRhinoGame/playerHealth/playerHealth1.png';
import playerHealth1 from '../../assets/imagesRhinoGame/playerHealth/playerHealth2.png';
import playerHealth2 from '../../assets/imagesRhinoGame/playerHealth/playerHealth3.png';
import playerHealth3 from '../../assets/imagesRhinoGame/playerHealth/playerHealth4.png';

import playerPower0 from '../../assets/imagesRhinoGame/playerPower/playerPower1.png';
import playerPower1 from '../../assets/imagesRhinoGame/playerPower/playerPower2.png';
import playerPower2 from '../../assets/imagesRhinoGame/playerPower/playerPower3.png';
import playerPower3 from '../../assets/imagesRhinoGame/playerPower/playerPower4.png';

export default function RhinoGame() {
  const [fontsLoaded] = useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  const navigation = useNavigation();

  const isWeb = Platform.OS === 'web';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    {
      route: 'index',
      gif: HomePageMenuItemGif,
      image: HomePageMenuItemHoverImage,
    },
    { route: 'Future' },
    { route: 'Projects' },
    { route: 'Socials' },
    {
      route: 'Chat',
      gif: ChatPageMenuItemGif,
      image: ChatPageMenuItemHoverImage,
    },
  ];
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const handleMessage = event => {
      console.log('Message received:', event.data);
      if (event.data && event.data.player) {
        setGameData(event.data);
        console.log('Game data received');
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <View style={s.container}>
      <View style={s.navigationContainer}>
        {navItems.map((item, index) => (
          <Pressable
            key={item.route}
            style={[
              s.navigationItem,
              hoveredIndex === index ? s.whiteBorder : s.greenBorder,
              hoveredIndex === index && s.hoveredItem,
            ]}
            onPress={() => navigation.navigate(item.route)}
            onHoverIn={isWeb ? () => setHoveredIndex(index) : undefined}
            onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
          >
            <ImageBackground
              source={hoveredIndex === index ? item.image : item.gif}
              style={s.backgroundImage}
            ></ImageBackground>
          </Pressable>
        ))}
      </View>
      <View style={s.gameContainer}>
        <View style={s.gameBoard}>
          {isWeb ? (
            <iframe
              src={rhinoGame}
              style={{
                width: '100%',
                height: '100%',
                border: '3px solid #39FF14',
              }}
              scrolling="no"
              title="Phaser Game"
            />
          ) : (
            <View style={s.mobileContent}>
              <Text style={s.text}>This game is not available on mobile.</Text>
              {/* Vous pouvez ajouter d'autres composants ou contenus ici pour mobile */}
            </View>
          )}
        </View>
        <View style={s.sideMenuContainer}>
          <View style={[s.sideMenuItem, s.gameStatus]}>
            <View style={s.gameStatusImages}>
              <View style={s.backgroundImage}>
                <ImageBackground
                  source={
                    gameData !== null
                      ? gameData.player.power === 3
                        ? playerPower3
                        : gameData.player.power === 2
                          ? playerPower2
                          : gameData.player.power === 1
                            ? playerPower1
                            : playerPower0
                      : playerPower0
                  }
                />
              </View>
              <View style={s.backgroundImage}>
                <ImageBackground
                  source={
                    gameData !== null
                      ? gameData.player.health === 3
                        ? playerHealth3
                        : gameData.player.health === 2
                          ? playerHealth2
                          : gameData.player.health === 1
                            ? playerHealth1
                            : playerHealth0
                      : playerHealth3
                  }
                />
              </View>
            </View>
            <View style={s.gameScoreContainer}>
              <Text style={s.text}>Score:</Text>
              <Text style={s.text}>
                {gameData !== null ? gameData.player.score : 0}
              </Text>
              <Text style={s.text}>Wave:</Text>
              <Text style={s.text}>0</Text>
            </View>
          </View>
          <View style={[s.sideMenuItem, s.sideMenuItem2, s.gridContainer]}>
            <View style={s.gridItem}></View>
            <View style={s.gridItem}></View>
            <View style={s.gridItem}></View>
            <View style={s.gridItem}></View>
          </View>
        </View>
      </View>
    </View>
  );
}
