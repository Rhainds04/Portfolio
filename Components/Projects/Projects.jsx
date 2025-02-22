import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { s } from './ProjectsScreen.Style';

export default function Projects() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Projects!</Text>
    </SafeAreaView>
  );
}
