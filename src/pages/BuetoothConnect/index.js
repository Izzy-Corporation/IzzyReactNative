import React from 'react'
import { 
  FlatList, 
  Image, 
  ImageBackground, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import BackgroundApp from '../../assets/noiseBackground.png'
import botImage from '../../assets/Bot.png'
import LayoutBase from '../Components/LayoutBase';

const BluetoothConnect = () => {

  const list = [
    {
      name: 'levi',
      key: 1,
    },
    {
      name: 'cleo',
      key: 2,
    },
    ]

  return(
    <LayoutBase>
      <View style={styles.header}>
        <Image source={botImage} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#F4F4F4'
          }}
        >Conecte-se ao seu Izzy!</Text>
      </View>
      <View style={styles.bluetoothContainer}>
        <View style={styles.bluetoothHeader}>
          <Text 
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              color: '#35B7BF'
            }}
          >Bluetooth</Text>
          {/* toggle 
              hr
          */}
        </View>
        <View style={styles.deviceContainer}>
          <FlatList 
            data={list}
            ListEmptyComponent={()=><Text style={{fontSize: 14}}>Nenhum dispositivo encontrado!</Text>}
            renderItem={({item}) => {
              return <Text style={{fontSize: 14}}>{item.name}</Text>
            }}
            style={styles.flatList} 
          />
        </View>
      </View>
    </LayoutBase>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bluetoothContainer: {
    flex: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 24,
    overflow: 'hidden'
  },
  bluetoothHeader: {
    padding: 16,
  },
  deviceContainer: {
    flex: 1,
  },
  flatList: {
    padding: 16,
    flex: 1,
  }
})

export default BluetoothConnect;