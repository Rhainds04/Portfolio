import { Text, ImageBackground, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { s } from './HomePage.style';

import rhinoGameHomePage from '../../assets/images/RhinoGameHomePage.gif';
import chatHomePage from '../../assets/images/ChatHomePage.gif';
import socialsHomePage from '../../assets/images/SocialsHomePage.gif';
import futureHomePage from '../../assets/images/FutureHomePage.gif';
import projectsHomePage from '../../assets/images/ProjectsHomePage.gif';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[s.mainContainer, s.pageStyle]}>
      <View style={s.sideColumn}>
        <View style={s.container}>
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('RhinoGame')}
          >
            <ImageBackground
              source={rhinoGameHomePage}
              style={s.backgroundImage}
            ></ImageBackground>
          </Pressable>
        </View>
        <View style={s.container}>
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('Future')}
          >
            <ImageBackground
              source={futureHomePage}
              style={s.backgroundImage}
            />
          </Pressable>
        </View>
      </View>
      <View style={s.container}>
        <Pressable
          style={[s.box, s.centerBox]}
          onPress={() => navigation.navigate('Projects')}
        >
          <ImageBackground
            source={projectsHomePage}
            style={s.backgroundImage}
          />
        </Pressable>
      </View>
      <View style={s.sideColumn}>
        <View style={s.container}>
          <Pressable
            style={s.box}
            onPress={() => navigation.navigate('Socials')}
          >
            <ImageBackground
              source={socialsHomePage}
              style={s.backgroundImage}
            />
          </Pressable>
        </View>
        <View style={s.container}>
          <Pressable style={s.box} onPress={() => navigation.navigate('Chat')}>
            <ImageBackground source={chatHomePage} style={s.backgroundImage} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
