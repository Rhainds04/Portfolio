import { Text, ImageBackground, View, Pressable, Platform } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { s } from './HomePage.style';

//GIF and PNG
import rhinoGameHomePage from '../../assets/HomePage/RhinoGameHomePage.gif';
import chatHomePage from '../../assets/HomePage/ChatHomePage.gif';
import socialsHomePage from '../../assets/HomePage/SocialsHomePage.gif';
import futureHomePage from '../../assets/HomePage/FutureHomePage.gif';
import projectsHomePage from '../../assets/HomePage/ProjectsHomePage.gif';
import rhinoGameHomePageHover from '../../assets/HomePage/RhinoGameHomePageHover.png';
import chatHomePageHover from '../../assets/HomePage/ChatHomePageHover.png';
import socialsHomePageHover from '../../assets/HomePage/SocialsHomePageHover.png';
import futureHomePageHover from '../../assets/HomePage/FutureHomePageHover.png';
import projectsHomePageHover from '../../assets/HomePage/ProjectsHomePageHover.png';

export default function HomePage() {
  const navigation = useNavigation();

  const isWeb = Platform.OS === 'web';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SafeAreaView style={[s.mainContainer, s.pageStyle]}>
      <View style={s.sideColumn}>
        <View
          style={[
            s.container,
            hoveredIndex === 'RhinoGame' ? s.whiteBorder : s.greenBorder,
            hoveredIndex === 'RhinoGame' ? undefined : s.withMargin,
          ]}
        >
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('RhinoGame')}
            onHoverIn={isWeb ? () => setHoveredIndex('RhinoGame') : undefined}
            onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
          >
            <ImageBackground
              source={
                hoveredIndex === 'RhinoGame'
                  ? rhinoGameHomePageHover
                  : rhinoGameHomePage
              }
              style={s.backgroundImage}
            ></ImageBackground>
          </Pressable>
        </View>
        <View
          style={[
            s.container,
            hoveredIndex === 'Future' ? s.whiteBorder : s.greenBorder,
            hoveredIndex === 'Future' ? undefined : s.withMargin,
          ]}
        >
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('Future')}
            onHoverIn={isWeb ? () => setHoveredIndex('Future') : undefined}
            onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
          >
            <ImageBackground
              source={
                hoveredIndex === 'Future' ? futureHomePageHover : futureHomePage
              }
              style={s.backgroundImage}
            />
          </Pressable>
        </View>
      </View>
      <View
        style={[
          s.container,
          hoveredIndex === 'Projects' ? s.whiteBorder : s.greenBorder,
          hoveredIndex === 'Projects' ? undefined : s.withMargin,
        ]}
      >
        <Pressable
          style={[s.box, s.centerBox]}
          onPress={() => navigation.navigate('Projects')}
          onHoverIn={isWeb ? () => setHoveredIndex('Projects') : undefined}
          onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
        >
          <ImageBackground
            source={
              hoveredIndex === 'Projects'
                ? projectsHomePageHover
                : projectsHomePage
            }
            style={s.backgroundImage}
          />
        </Pressable>
      </View>
      <View style={s.sideColumn}>
        <View
          style={[
            s.container,
            hoveredIndex === 'Socials' ? s.whiteBorder : s.greenBorder,
            hoveredIndex === 'Socials' ? undefined : s.withMargin,
          ]}
        >
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('Socials')}
            onHoverIn={isWeb ? () => setHoveredIndex('Socials') : undefined}
            onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
          >
            <ImageBackground
              source={
                hoveredIndex === 'Socials'
                  ? socialsHomePageHover
                  : socialsHomePage
              }
              style={s.backgroundImage}
            />
          </Pressable>
        </View>
        <View
          style={[
            s.container,
            hoveredIndex === 'Chat' ? s.whiteBorder : s.greenBorder,
            hoveredIndex === 'Chat' ? undefined : s.withMargin,
          ]}
        >
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('Chat')}
            onHoverIn={isWeb ? () => setHoveredIndex('Chat') : undefined}
            onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
          >
            <ImageBackground
              source={
                hoveredIndex === 'Chat' ? chatHomePageHover : chatHomePage
              }
              style={s.backgroundImage}
            />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
