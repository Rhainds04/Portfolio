import { View, Text } from 'react-native';
import { s } from './SocialsScreen.Style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SocialsScreen() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Socials!</Text>
    </SafeAreaView>
  );
}
