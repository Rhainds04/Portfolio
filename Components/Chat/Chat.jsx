import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { s } from './ChatScreen.Style';

export default function Chat() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Chat!</Text>
    </SafeAreaView>
  );
}
