import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import ArrowRight from '../../assets/icons/arrow-right.png'
import LogoImg from '../../assets/Logo.png'

const Home = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.viewBase}/>
      <View style={styles.viewLogo}>
        <Image source={LogoImg} style={{}}/>
      </View>
      <View style={styles.viewBase}/>
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button}>
          <Image source={ArrowRight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
