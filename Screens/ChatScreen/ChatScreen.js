import { View, Text } from 'react-native';
import { s } from './ChatScreen.Style';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  return (
    <SafeAreaView style={s.mainContainer}>
      <Text style={s.text}>Bienvenue sur Chat!</Text>
    </SafeAreaView>
  );
}
