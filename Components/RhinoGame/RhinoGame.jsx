import { View, Platform, Text, Pressable, ImageBackground } from 'react-native';
import { s } from './RhinoGameScreen.Style';
import rhinoGame from './Game/rhinoGame.html';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';

//NavBar GIF and PNG
import HomePageMenuItemGif from '../../assets/imagesRhinoGame/HomePageMenuItem.gif';
import HomePageMenuItemHoverImage from '../../assets/imagesRhinoGame/HomePageMenuItemHover.png';

//Game PNG
import playerHealth0 from '../../assets/imagesRhinoGame/playerHealth/playerHealth1.png';
import playerHealth1 from '../../assets/imagesRhinoGame/playerHealth/playerHealth2.png';
import playerHealth2 from '../../assets/imagesRhinoGame/playerHealth/playerHealth3.png';
import playerHealth3 from '../../assets/imagesRhinoGame/playerHealth/playerHealth4.png';

import playerPower0 from '../../assets/imagesRhinoGame/playerPower/playerPower1.png';
import playerPower1 from '../../assets/imagesRhinoGame/playerPower/playerPower2.png';
import playerPower2 from '../../assets/imagesRhinoGame/playerPower/playerPower3.png';
import playerPower3 from '../../assets/imagesRhinoGame/playerPower/playerPower4.png';

//Game Menu PNG
import settingIcon from '../../assets/imagesRhinoGame/MenuIcons/SettingsIcon1.png';
import settingIconHovered from '../../assets/imagesRhinoGame/MenuIcons/SettingsIcon2.png';
import trophyIcon from '../../assets/imagesRhinoGame/MenuIcons/TrophyIcon1.png';
import trophyIconHovered from '../../assets/imagesRhinoGame/MenuIcons/TrophyIcon2.png';
import howToPlayIcon from '../../assets/imagesRhinoGame/MenuIcons/HowToPlay1.png';
import howToPlayIconHovered from '../../assets/imagesRhinoGame/MenuIcons/HowToPlay2.png';
import skinIcon from '../../assets/imagesRhinoGame/MenuIcons/skinIcon1.png';
import skinIconHovered from '../../assets/imagesRhinoGame/MenuIcons/skinIcon2.png';

export default function RhinoGame() {
  useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  const navigation = useNavigation();

  const isWeb = Platform.OS === 'web';
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredMenuIcon, setHoveredMenuIcon] = useState(null);

  const navItems = [
    {
      route: 'index',
      gif: HomePageMenuItemGif,
      image: HomePageMenuItemHoverImage,
    },
    { route: 'Future' },
    { route: 'Projects' },
    { route: 'Socials' },
  ];

  const gameMenuItems = [
    {
      menu: 'settings',
      icon: settingIcon,
      hoveredIcon: settingIconHovered,
    },
    {
      menu: 'trophy',
      icon: trophyIcon,
      hoveredIcon: trophyIconHovered,
    },
    {
      menu: 'howToPlay',
      icon: howToPlayIcon,
      hoveredIcon: howToPlayIconHovered,
    },
    {
      menu: 'skin',
      icon: skinIcon,
      hoveredIcon: skinIconHovered,
    },
  ];

  const [menuPageOpened, setMenuPageOpened] = useState(false);
  const [settingsOpened, setSettingsOpened] = useState(false);
  const [trophyOpened, setTrophyOpened] = useState(false);
  const [howToPlayOpened, setHowToPlayOpened] = useState(false);
  const [skinOpened, setSkinOpened] = useState(false);

  const [gameData, setGameData] = useState(null);

  if (isWeb) {
    useEffect(() => {
      const handleMessage = event => {
        console.log('Message received:', event.data);
        if (event.data && event.data.player) {
          setGameData(event.data);
          console.log('Game data received');
        }
      };
      window.addEventListener('message', handleMessage);
    }, []);
  }

  return (
    <View style={s.container}>
      {isWeb ? (
        <View style={s.navigationContainer}>
          <View style={[s.navigationItem, { height: '15%', width: '110%' }]}>
            <Text
              style={[
                s.title,
                { textAlign: 'center', fontSize: 75, fontWeight: '500' },
              ]}
            >
              RHINO GAME
            </Text>
          </View>
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
      ) : undefined}
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
        {isWeb ? (
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

                <Text style={s.text}>
                  {gameData !== null ? gameData.enemySpawner.wavesCount : 0}
                </Text>
              </View>
            </View>
            {!menuPageOpened ? (
              <View style={[s.sideMenuItem, s.sideMenuItem2, s.gridContainer]}>
                {gameMenuItems.map((item, index) => (
                  <Pressable
                    key={'menu item' + index}
                    style={
                      hoveredMenuIcon === index
                        ? [s.gridItem, s.gridItemHovered, s.whiteBorder]
                        : [s.gridItem, s.greenBorder]
                    }
                    onPress={() => {
                      if (item.menu === 'settings') {
                        setSettingsOpened(true);
                      } else if (item.menu === 'trophy') {
                        setTrophyOpened(true);
                      } else if (item.menu === 'howToPlay') {
                        setHowToPlayOpened(true);
                      } else {
                        setSkinOpened(true);
                      }

                      setMenuPageOpened(true);
                    }}
                    onHoverIn={() => setHoveredMenuIcon(index)}
                    onHoverOut={() => setHoveredMenuIcon(null)}
                  >
                    <ImageBackground
                      source={
                        hoveredMenuIcon === index ? item.hoveredIcon : item.icon
                      }
                      style={s.backgroundImage}
                    />
                  </Pressable>
                ))}
              </View>
            ) : undefined}
            {menuPageOpened && settingsOpened ? (
              <View style={[s.sideMenuItem, s.sideMenuItem2]}>
                <View style={[s.subMenuItem, s.greenBorder]}>
                  <Pressable
                    key={'settingsBackButton'}
                    style={s.menuBackBtn}
                    onPress={() => {
                      setMenuPageOpened(false);
                      setSettingsOpened(false);
                    }}
                    onHoverIn={() => setHoveredMenuIcon('settingsBackBtn')}
                    onHoverOut={() => setHoveredMenuIcon(null)}
                  >
                    <Text
                      style={
                        hoveredMenuIcon === 'settingsBackBtn'
                          ? s.whiteText
                          : s.text
                      }
                    >
                      {'<'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ) : undefined}
            {menuPageOpened && trophyOpened ? (
              <View style={[s.sideMenuItem, s.sideMenuItem2]}>
                <View style={[s.subMenuItem, s.greenBorder]}>
                  <Pressable
                    key={'trophyBackButton'}
                    style={s.menuBackBtn}
                    onPress={() => {
                      setMenuPageOpened(false);
                      setTrophyOpened(false);
                    }}
                    onHoverIn={() => setHoveredMenuIcon('trophyBackButton')}
                    onHoverOut={() => setHoveredMenuIcon(null)}
                  >
                    <Text
                      style={
                        hoveredMenuIcon === 'trophyBackButton'
                          ? s.whiteText
                          : s.text
                      }
                    >
                      {'<'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ) : undefined}
            {menuPageOpened && howToPlayOpened ? (
              <View style={[s.sideMenuItem, s.sideMenuItem2]}>
                <View style={[s.subMenuItem, s.greenBorder]}>
                  <View style={s.subMenuTitle}>
                    <Pressable
                      key={'howToPlayBackButton'}
                      style={s.menuBackBtn}
                      onPress={() => {
                        setMenuPageOpened(false);
                        setHowToPlayOpened(false);
                      }}
                      onHoverIn={() =>
                        setHoveredMenuIcon('howToPlayBackButton')
                      }
                      onHoverOut={() => setHoveredMenuIcon(null)}
                    >
                      <Text
                        style={
                          hoveredMenuIcon === 'howToPlayBackButton'
                            ? s.whiteText
                            : s.text
                        }
                      >
                        {'<'}
                      </Text>
                    </Pressable>
                    <Text style={s.text}>How to Play </Text>
                  </View>
                  <View style={s.subMenuContent}>
                    <Text style={[s.text, s.smallerText]}>
                      1. Avoid all moving objects that appear on the board.
                    </Text>
                    <Text style={[s.text, s.smallerText]}>
                      2. Collect power-ups that spawn on the board.
                    </Text>
                    <Text style={[s.text, s.smallerText]}>
                      3. When your power meter is full, press E to become
                      invulnerable or press Space to restore your health to
                      maximum.
                    </Text>
                    <Text style={[s.text, s.smallerText]}>
                      4. Try to get the best score you can :{')'}
                    </Text>
                  </View>
                </View>
              </View>
            ) : undefined}
            {menuPageOpened && skinOpened ? (
              <View style={[s.sideMenuItem, s.sideMenuItem2]}>
                <View style={[s.subMenuItem, s.greenBorder]}>
                  <Pressable
                    key={'skinBackButton'}
                    style={s.menuBackBtn}
                    onPress={() => {
                      setMenuPageOpened(false);
                      setSkinOpened(false);
                    }}
                    onHoverIn={() => setHoveredMenuIcon('skinBackButton')}
                    onHoverOut={() => setHoveredMenuIcon(null)}
                  >
                    <Text
                      style={
                        hoveredMenuIcon === 'skinBackButton'
                          ? s.whiteText
                          : s.text
                      }
                    >
                      {'<'}
                    </Text>
                  </Pressable>
                </View>
              </View>
            ) : undefined}
          </View>
        ) : undefined}
      </View>
    </View>
  );
}
