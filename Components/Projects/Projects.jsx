import { View, Text, Pressable, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import { s } from './ProjectsScreen.Style';

export default function Projects() {
  const navigation = useNavigation();

  useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  const isWeb = Platform.OS === 'web';

  const [currentNavIndex, setCurrentNavIndex] = useState(null);

  const navItems = [
    { route: 'index', text: 'Home' },
    { route: 'Future', text: 'Future' },
    { route: 'Socials', text: 'Socials' },
    { route: 'RhinoGame', text: 'RhinoGame' },
  ];

  return (
    <SafeAreaView style={s.mainContainer}>
      <View style={s.navbar}>
        {navItems.map((item, index) => (
          <Pressable
            key={index}
            style={
              currentNavIndex === index ? s.navBarItemHovered : s.navBarItem
            }
            onPress={() => navigation.navigate(item.route)}
            onHoverIn={() => setCurrentNavIndex(index)}
            onHoverOut={() => setCurrentNavIndex(null)}
          >
            <Text
              style={[
                s.text,
                currentNavIndex === index ? [s.whiteText, s.hoveredText] : null,
              ]}
            >
              {item.text}
            </Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
