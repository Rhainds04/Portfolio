import { View, Text } from 'react-native';
import { s } from './FutureScren.Style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FutureScreen() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Future!</Text>
    </SafeAreaView>
  );
}
