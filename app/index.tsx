import { View, Text, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { s } from '../App.style';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../Components/HomePage/HomePage';
import RhinoGameScreen from '../Screens/RhinoGameScreen/RhinoGameScreen';
import ChatScreen from '../Screens/ChatScreen/ChatScreen';
import FutureScreen from '../Screens/FutureScreen/FutureScreen';
import ProjectsScreen from '../Screens/ProjectsScreen/ProjectsScreen';
import SocialsScreen from '../Screens/SocialsScreen/SocialsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="RhinoGame" component={RhinoGameScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Future" component={FutureScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Socials" component={SocialsScreen} />
    </Stack.Navigator>
  );
}
