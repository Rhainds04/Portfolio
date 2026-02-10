import {
  Text,
  TextInput,
  ImageBackground,
  View,
  Pressable,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { launchImageLibrary } from 'react-native-image-picker';

import { s } from './HomePage.style';

//GIF and PNG
import rhinoGameHomePage from '../../assets/HomePage/RhinoGameHomePage.gif';
import loginHomePage from '../../assets/HomePage/LoginHomePage.gif';
import socialsHomePage from '../../assets/HomePage/SocialsHomePage.gif';
import futureHomePage from '../../assets/HomePage/FutureHomePage.gif';
import projectsHomePage from '../../assets/HomePage/ProjectsHomePage.gif';
import rhinoGameHomePageHover from '../../assets/HomePage/RhinoGameHomePageHover.png';
import loginHomePageHover from '../../assets/HomePage/LoginHomePageHover.png';
import socialsHomePageHover from '../../assets/HomePage/SocialsHomePageHover.png';
import futureHomePageHover from '../../assets/HomePage/FutureHomePageHover.png';
import projectsHomePageHover from '../../assets/HomePage/ProjectsHomePageHover.png';

export default function HomePage() {
  const navigation = useNavigation();

  useFonts({
    pixelFont: require('../../assets/fonts/Tiny5-Regular.ttf'),
  });

  const isWeb = Platform.OS === 'web';
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [currentFormBtn, setCurrentFormBtn] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChanges = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log('form submitted:', formData);
  };

  const MyForm = React.memo(() => {
    const [imageUri, setImageUri] = useState(null);

    const selectImage = () => {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 2000,
        maxWidth: 2000,
      };

      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          let uri = response.assets[0].uri;
          setImageUri(uri);
          // Update form data with image
          handleChanges('profileImage', uri);
        }
      });
    };

    return (
      <View style={s.formContainer}>
        <View style={s.formSelectionBtnBox}>
          <Pressable
            onPress={() => {
              setIsFormOpened(false);
              setCurrentFormBtn(null);
            }}
            onHoverIn={() => setCurrentFormBtn('backBtn')}
            onHoverOut={() => setCurrentFormBtn(null)}
          >
            <Text
              style={[
                s.text,
                s.goBackBtn,
                currentFormBtn === 'backBtn' ? { color: 'white' } : null,
              ]}
            >
              {'<'}
            </Text>
          </Pressable>
          <Pressable
            style={[
              s.formSelectionBtn,
              isLoginForm ? { backgroundColor: '#39FF14' } : null,
              currentFormBtn === 'Login' ? { borderColor: 'white' } : null,
            ]}
            onPress={() => setIsLoginForm(true)}
            onHoverIn={() => setCurrentFormBtn('Login')}
            onHoverOut={() => setCurrentFormBtn(null)}
          >
            <Text
              style={[
                s.text,
                isLoginForm ? { color: 'white' } : null,
                currentFormBtn === 'Login' ? { color: 'white' } : null,
              ]}
            >
              Login
            </Text>
          </Pressable>
          <Pressable
            style={[
              s.formSelectionBtn,
              isLoginForm ? null : { backgroundColor: '#39FF14' },
              currentFormBtn === 'Signup' ? { borderColor: 'white' } : null,
            ]}
            onPress={() => setIsLoginForm(false)}
            onHoverIn={() => setCurrentFormBtn('Signup')}
            onHoverOut={() => setCurrentFormBtn(null)}
          >
            <Text
              style={[
                s.text,
                isLoginForm ? null : { color: 'white' },
                currentFormBtn === 'Signup' ? { color: 'white' } : null,
              ]}
            >
              Signup
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <View style={s.fieldContainer}>
            {isLoginForm ? undefined : (
              <View>
                <Text style={s.text}>Name:</Text>
                <TextInput
                  style={s.textField}
                  value={formData.name}
                  onChangeText={text => handleChanges('name', text)}
                  placeholder="Enter your name"
                />
              </View>
            )}
            <View>
              <Text style={s.text}>Email:</Text>
              <TextInput
                style={s.textField}
                value={formData.email}
                onChangeText={text => handleChanges('email', text)}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text style={s.text}>Password:</Text>
              <TextInput
                style={s.textField}
                value={formData.password}
                onChangeText={text => handleChanges('password', text)}
                placeholder="Enter your password"
              />
            </View>
          </View>
          {isLoginForm ? null : (
            <View style={s.imageUploadContainer}>
              <Text style={s.text}>Profile Image:</Text>
              <Pressable
                style={[
                  s.imageSelectBtn,
                  currentFormBtn === 'ImageSelect'
                    ? { borderColor: 'white' }
                    : null,
                ]}
                onPress={selectImage}
                onHoverIn={() => setCurrentFormBtn('ImageSelect')}
                onHoverOut={() => setCurrentFormBtn(null)}
              >
                <Text
                  style={[
                    s.text,
                    currentFormBtn === 'ImageSelect'
                      ? { color: 'white' }
                      : null,
                  ]}
                >
                  {imageUri ? 'Change Image' : 'Select Image'}
                </Text>
              </Pressable>

              {imageUri ? (
                <View style={s.imagePreviewContainer}>
                  <Image source={{ uri: imageUri }} style={s.imagePreview} />
                </View>
              ) : null}
            </View>
          )}
        </View>
        <View style={s.submitBtnContainer}>
          <Pressable
            style={[
              s.submitBtn,
              currentFormBtn === 'Submit' ? { borderColor: 'white' } : null,
            ]}
            onPress={handleSubmit}
            onHoverIn={() => setCurrentFormBtn('Submit')}
            onHoverOut={() => setCurrentFormBtn(null)}
          >
            <Text
              style={[
                s.text,
                currentFormBtn === 'Submit' ? { color: 'white' } : null,
              ]}
            >
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    );
  });

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
            hoveredIndex === 'Login' ? s.whiteBorder : s.greenBorder,
            hoveredIndex === 'Login' ? undefined : s.withMargin,
          ]}
        >
          {isFormOpened ? (
            <MyForm style={s.box} />
          ) : (
            <Pressable
              style={s.box}
              onPress={() => {
                setIsFormOpened(true);
                setHoveredIndex(null);
              }}
              onHoverIn={isWeb ? () => setHoveredIndex('Login') : undefined}
              onHoverOut={isWeb ? () => setHoveredIndex(null) : undefined}
            >
              <ImageBackground
                source={
                  hoveredIndex === 'Login' ? loginHomePageHover : loginHomePage
                }
                style={s.backgroundImage}
              />
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
