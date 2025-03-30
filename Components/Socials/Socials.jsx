import { View, Text, Platform, Pressable, Image } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Linking } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { s } from './SocialsScreen.Style';

//images
import instagramLogo from '../../assets/Socials/instagramLogo.png';
import emailLogo from '../../assets/Socials/emailLogo.png';
import githubLogo from '../../assets/Socials/githubLogo.png';

export default function Socials() {
  const navigation = useNavigation();
  useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  const isWeb = Platform.OS === 'web';

  const navItems = [
    { route: 'index', text: 'Home' },
    { route: 'Future', text: 'Future' },
    { route: 'Projects', text: 'Projects' },
    { route: 'RhinoGame', text: 'RhinoGame' },
  ];

  const [currentNavIndex, setCurrentNavIndex] = useState(null);

  const [instagramUrl, setCurrentInstagramUrl] = useState(null);
  const [githubUrl, setCurrentGithubUrl] = useState(null);

  const [instagramCopyBtn, setInstagramCopyBtn] = useState(null);
  const [githubCopyBtn, setGithubCopyBtn] = useState(null);
  const [emailCopyBtn, setEmailCopyBtn] = useState(null);

  const goToUrl = async url => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URL: " + url);
    }
  };

  const handleCopy = async textToCopy => {
    console.log('Copy function called with:', textToCopy);
    try {
      await Clipboard.setString(textToCopy);
      console.log('Text copied successfully');
    } catch (error) {
      console.error('Failed to copy text: ', error);
    }
  };

  return (
    <SafeAreaView style={s.mainContainer}>
      <View style={s.navBar}>
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
        <View style={isWeb ? s.card : [s.card, { width: '90%', height: 100 }]}>
          <View style={s.backgroundImage}>
            <Image
              source={instagramLogo}
              style={isWeb ? null : { height: 100, aspectRatio: 1 }}
            />
          </View>

          <View style={s.textContainer}>
            <Text style={s.cardText}>Instagram</Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                onPress={() =>
                  goToUrl('https://www.instagram.com/rhainds.dev/')
                }
                onHoverIn={() => setCurrentInstagramUrl(true)}
                onHoverOut={() => setCurrentInstagramUrl(null)}
              >
                <Text
                  style={
                    instagramUrl
                      ? [
                          s.cardText,
                          s.whiteText,
                          { textDecorationLine: 'underline' },
                        ]
                      : s.cardText
                  }
                >
                  {'@'}rhainds.dev
                </Text>
              </Pressable>
              <Pressable
                style={{ justifyContent: 'center' }}
                onPress={() =>
                  handleCopy('https://www.instagram.com/rhainds.dev/')
                }
                onHoverIn={() => setInstagramCopyBtn(true)}
                onHoverOut={() => setInstagramCopyBtn(null)}
              >
                <Icon
                  name="content-copy"
                  size={24}
                  style={
                    instagramCopyBtn ? [s.icon, { color: 'white' }] : s.icon
                  }
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={isWeb ? s.card : [s.card, { width: '90%', height: 100 }]}>
          <View style={[s.textContainer, { alignItems: 'flex-end' }]}>
            <Text style={s.cardText}>Github</Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={{ justifyContent: 'center' }}
                onPress={() => handleCopy('https://github.com/Rhainds04')}
                onHoverIn={() => setGithubCopyBtn(true)}
                onHoverOut={() => setGithubCopyBtn(null)}
              >
                <Icon
                  name="content-copy"
                  size={24}
                  style={githubCopyBtn ? [s.icon, { color: 'white' }] : s.icon}
                />
              </Pressable>
              <Pressable
                onPress={() => goToUrl('https://github.com/Rhainds04')}
                onHoverIn={() => setCurrentGithubUrl(true)}
                onHoverOut={() => setCurrentGithubUrl(null)}
              >
                <Text
                  style={
                    githubUrl
                      ? [
                          s.cardText,
                          s.whiteText,
                          { textDecorationLine: 'underline' },
                        ]
                      : s.cardText
                  }
                >
                  Rhainds04
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={s.backgroundImage}>
            <Image
              source={githubLogo}
              style={isWeb ? null : { height: 100, aspectRatio: 1 }}
            />
          </View>
        </View>
        <View style={isWeb ? s.card : [s.card, { width: '90%', height: 100 }]}>
          <View style={s.backgroundImage}>
            <Image
              source={emailLogo}
              style={isWeb ? null : { height: 100, aspectRatio: 1 }}
            />
          </View>
          <View style={s.textContainer}>
            <Text style={s.cardText}>Email</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={s.cardText}>emilerhainds@gmail.com</Text>
              <Pressable
                style={{ justifyContent: 'center' }}
                onPress={() => handleCopy('emilerhainds@gmail.com')}
                onHoverIn={() => setEmailCopyBtn(true)}
                onHoverOut={() => setEmailCopyBtn(null)}
              >
                <Icon
                  name="content-copy"
                  size={24}
                  style={emailCopyBtn ? [s.icon, { color: 'white' }] : s.icon}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
