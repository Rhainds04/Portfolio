import { View, Text, Pressable, Platform, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { s } from './ProjectsScreen.Style';

import { NewProjectForm } from './NewProjectForm';

export default function Projects() {
  const navigation = useNavigation();

  useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  const isWeb = Platform.OS === 'web';

  const navItems = [
    { route: 'index', text: 'Home' },
    { route: 'Future', text: 'Future' },
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
      <View style={s.pageContent}>
        <View style={s.sideBarActions}>
          <View style={{ flexDirection: 'row' }}>
            <TextInput style={s.searchBar}></TextInput>
            <Pressable
              style={[
                s.SearchBtn,
                currentActionBtn === 'searchBtn'
                  ? { borderColor: 'white' }
                  : undefined,
              ]}
              onHoverIn={() => setCurrentActionBtn('searchBtn')}
              onHoverOut={() => setCurrentActionBtn(null)}
            >
              <Icon
                style={[
                  s.icon,
                  currentActionBtn === 'searchBtn'
                    ? { color: 'white' }
                    : undefined,
                ]}
                name="search"
                size={24}
              />
            </Pressable>
            <Pressable
              style={[
                s.filterBtn,
                currentActionBtn === 'filterBtn'
                  ? { borderColor: 'white' }
                  : undefined,
              ]}
              onHoverIn={() => setCurrentActionBtn('filterBtn')}
              onHoverOut={() => setCurrentActionBtn(null)}
            >
              <Icon
                style={[
                  s.icon,
                  currentActionBtn === 'filterBtn'
                    ? { color: 'white' }
                    : undefined,
                ]}
                name="filter-list-alt"
                size={24}
              />
            </Pressable>
          </View>
          <View>
            <Pressable
              style={[
                s.addBtn,
                currentActionBtn === 'addBtn'
                  ? { borderColor: 'white' }
                  : undefined,
              ]}
              onPress={() =>
                formOpened ? setFormOpened(null) : setFormOpened(true)
              }
              onHoverIn={() => setCurrentActionBtn('addBtn')}
              onHoverOut={() => setCurrentActionBtn(null)}
            >
              <Icon
                style={[
                  s.icon,
                  currentActionBtn === 'addBtn'
                    ? { color: 'white' }
                    : undefined,
                ]}
                name={formOpened ? 'close' : 'add'}
                size={24}
              />
            </Pressable>
          </View>
        </View>
        <View style={s.mainContent}>
          {formOpened ? <NewProjectForm /> : undefined}
        </View>
      </View>
    </SafeAreaView>
  );
}