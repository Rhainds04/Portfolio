import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { s } from './ProjectsScreen.Style';
import { LanguagePressable } from './LanguagePressable';

export const NewProjectForm = () => {
  const languages = [
    'Python',
    'Java',
    'C#',
    'JavaScript',
    'C++',
    'TypeScript',
    'Go',
    'Rust',
    'Php',
    'Swift',
    'Kotlin',
    'Sql',
    'Lua',
    'Ruby',
    'C',
    'React-native',
    'Elixir',
    'html-css',
  ];

  return (
    <ScrollView style={{ padding: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2, margin: 5 }}>
          <View>
            <Text style={s.formLabel}>PROJECT TITLE:</Text>
            <TextInput
              style={s.formField}
              placeholder="Enter Title..."
            ></TextInput>
          </View>
          <View>
            <Text style={s.formLabel}>SUMMARY:</Text>
            <TextInput
              multiline
              numberOfLines={10}
              style={s.formField}
              placeholder="Enter Summary..."
            />
          </View>
        </View>
        <View style={{ flex: 1, margin: 5 }}>
          <Text style={s.formLabel}>IMAGES:</Text>
          <Pressable style={s.formImageSelector}></Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 2 }}>
          <Text style={s.formLabel}>LANGUAGES:</Text>
          <View style={s.languagesContainer}>
            {languages.map(language => (
              <LanguagePressable name={language} />
            ))}
          </View>
        </View>
        <View style={{ flex: 2, margin: 5 }}>
          <Text style={s.formLabel}>DESCRIPTION:</Text>
          <TextInput
            placeholder="Enter Description..."
            multiline
            numberOfLines={10}
            style={s.formField}
          />
        </View>
      </View>
    </ScrollView>
  );
};
