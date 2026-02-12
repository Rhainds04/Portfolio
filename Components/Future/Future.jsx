import { View, Text, Pressable, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

import { s } from './FutureScreen.Style';

export default function Future() {
  const navigation = useNavigation();
  
    useFonts({
      pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
    });
  
    const isWeb = Platform.OS === 'web';
  
    const navItems = [
      { route: 'index', text: 'Home' },
      { route: 'Projects', text: 'Projects' },
      { route: 'Socials', text: 'Socials' },
      { route: 'RhinoGame', text: 'RhinoGame' },
    ];
    
    const [currentNavIndex, setCurrentNavIndex] = useState(null);
    const [currentActionBtn, setCurrentActionBtn] = useState(null);
    const [formOpened, setFormOpened] = useState(null);
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
