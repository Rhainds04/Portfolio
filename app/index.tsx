import { View, Text, SafeAreaView } from 'react-native';
import {
  RhinoGame,
  Chat,
  Plans,
  MyProjects,
  Socials,
} from '../Components/HomePage/HomePage';

import { s } from '../App.style';

export default function App() {
  return (
    <SafeAreaView style={s.pageStyle}>
      <View style={s.mainContainer}>
        <View style={s.sideColumn}>
          <View style={s.box}>
            <RhinoGame />
          </View>
          <View style={s.box}>
            <Plans />
          </View>
        </View>
        <View style={[s.box, s.centerBox]}>
          <MyProjects />
        </View>
        <View style={s.sideColumn}>
          <View style={s.box}>
            <Socials />
          </View>
          <View style={s.box}>
            <Chat />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
