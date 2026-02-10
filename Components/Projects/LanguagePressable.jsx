import { Pressable, Text } from 'react-native';
import { s } from './ProjectsScreen.Style';

export const LanguagePressable = ({ languageName }) => {
  const isSelected = false;
  return (
    <Pressable style={s.languageBtn}>
      <Text style={s.text}>{languageName}</Text>
    </Pressable>
  );
};
