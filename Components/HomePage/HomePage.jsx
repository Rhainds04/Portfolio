import { Text, ImageBackground, View, Pressable, Animated } from 'react-native';
import { s } from './HomePage.style';
import { useFonts } from 'expo-font';
import { WebView } from 'react-native-webview';
import rhinoGameHomePage from '../../assets/images/RhinoGameHomePage.gif';
import chatHomePage from '../../assets/images/ChatHomePage.gif';
import socialsHomePage from '../../assets/images/SocialsHomePage.gif';

export function RhinoGame() {
  const [fontsLoaded] = useFonts({
    Jersey10Regular: require('../../assets/fonts/Jersey10Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  return (
    <View style={s.container}>
      <ImageBackground
        source={rhinoGameHomePage}
        style={s.backgroundImage}
      ></ImageBackground>
    </View>
  );
}

export function Chat() {
  const [fontsLoaded] = useFonts({
    Jersey10Regular: require('../../assets/fonts/Jersey10Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  return (
    <View style={s.container}>
      <ImageBackground
        source={chatHomePage}
        style={s.backgroundImage}
      ></ImageBackground>
    </View>
  );
}

export function Plans() {
  const [fontsLoaded] = useFonts({
    Jersey10Regular: require('../../assets/fonts/Jersey10Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  return <View style={s.container}></View>;
}

export function MyProjects() {
  const [fontsLoaded] = useFonts({
    Jersey10Regular: require('../../assets/fonts/Jersey10Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  return <View style={s.container}></View>;
}

export function Socials() {
  const [fontsLoaded] = useFonts({
    Jersey10Regular: require('../../assets/fonts/Jersey10Regular.ttf'),
  });
  if (!fontsLoaded) return null;
  return (
    <View style={s.container}>
      <ImageBackground
        source={socialsHomePage}
        style={s.backgroundImage}
      ></ImageBackground>
    </View>
  );
}
