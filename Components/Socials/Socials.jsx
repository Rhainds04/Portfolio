import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { s } from './SocialsScreen.Style';

export default function Socials() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Socials!</Text>
    </SafeAreaView>
  );
}
