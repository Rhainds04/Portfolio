import { View } from 'react-native-web';
import { Text } from 'react-native';
import { s } from './phtoGallery.style';

export const PhotoGallery = props => {
  return (
    <View style={s.container}>
      <Text style={[s.text, s.title]}>{props.title}</Text>
    </View>
  );
};
