import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

import BackgroundApp from './src/assets/noiseBackground.png'
import Home from './src/pages/Home';

const App = () => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle='light-content' />
        
        <Home />

        <ImageBackground
          source={BackgroundApp}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#35B7BF'
  }
});

export default App;
