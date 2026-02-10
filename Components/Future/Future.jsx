import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { s } from './FutureScren.Style';

export default function Future() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Future!</Text>
    </SafeAreaView>
  );
}
