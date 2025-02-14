import { View, Text } from 'react-native';
import { PhotoGallery } from '../Components/Introduction/PhotoGallery';
import { s } from '../App.style';

export default function App() {
  return (
    <View style={s.pageStyle}>
      <View style={s.mainContainer}>
        <PhotoGallery title="My Photo Gallery" />
      </View>
    </View>
  );
}
