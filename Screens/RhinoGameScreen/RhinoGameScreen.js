import { View, Text } from 'react-native';
import { s } from './RhinoGameScreen.Style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RhinoGameScreen() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur RhinoGame!</Text>
    </SafeAreaView>
  );
}
