import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from 'react-native'

import BackgroundApp from '../../assets/noiseBackground.png'

const LayoutBase = (props) => {
  return(
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#35B7BF',
        paddingHorizontal: 20,
        paddingBottom: 20,
    }}>
      <StatusBar barStyle='light-content' />
      <ImageBackground
        source={BackgroundApp}
        resizeMode='cover'
        style={{flex: 1}}
      >
        {props.children}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default LayoutBase