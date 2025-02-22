import React from 'react';
import { View, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

import { s } from './RhinoGameScreen.Style';

export default function RhinoGame() {
  const isWeb = Platform.OS === 'web';

  return (
    <View style={s.container}>
      {isWeb ? (
        <iframe
          src="/rhinoGame.html"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Phaser Game"
        />
      ) : (
        <WebView source={require('../../assets/rhinoGame.html')} />
      )}
    </View>
  );
}
