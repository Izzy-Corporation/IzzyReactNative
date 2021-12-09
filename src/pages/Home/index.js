import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ArrowRight from '../../assets/icons/arrow-right.png'
import LogoImg from '../../assets/Logo.png'
import LayoutBase from '../Components/LayoutBase';

const Home = () => {
  const navigation = useNavigation();

  function NavigateToBluetoothPage (){
    navigation.navigate('Bluetooth')
  }

  return (
    <LayoutBase>
      <View style={styles.viewBase}/>
      <View style={styles.viewLogo}>
        <Image source={LogoImg} style={{}}/>
      </View>
      <View style={styles.viewBase}/>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button} onPress={NavigateToBluetoothPage}>
          <Image source={ArrowRight} />
        </TouchableOpacity>
      </View>
    </LayoutBase>
  );
};

const styles = StyleSheet.create({
  viewBase: {
    flex: 1
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 36,
    paddingRight: 36,
    borderRadius: 14,
    backgroundColor: "#298D94",
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

export default Home;
