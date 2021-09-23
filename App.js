import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


const TravelWebsite = 'https://pavilion98.github.io/'

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {{ width: '100%', height: '100%'}}> 
        <WebView 
          source= { { uri: TravelWebsite} }
          onLoad = {console.log('Loaded!')}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 28,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
