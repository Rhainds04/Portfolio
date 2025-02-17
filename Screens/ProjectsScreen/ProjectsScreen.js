import { View, Text } from 'react-native';
import { s } from './ProjectsScreen.Style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProjectsScreen() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Projects!</Text>
    </SafeAreaView>
  );
}
