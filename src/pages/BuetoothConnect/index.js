import React from 'react'
import { 
  FlatList, 
  Image,
  StyleSheet, 
  Switch, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import bluetoothIcon from '../../assets/icons/bluetoothIcon.png'
import enterIcon from '../../assets/icons/enterIcon.png'
import botImage from '../../assets/Bot.png'
import LayoutBase from '../Components/LayoutBase';

const BluetoothConnect = () => {
  const navigation = useNavigation();

  function NavigateToControlPainel (){
    navigation.navigate('Control')
  }

  const list = [
    {
      name: 'levi',
      key: 1,
    },
    {
      name: 'cleo',
      key: 2,
    },
    {
      name: '3g',
      key: 3,
    },
    {
      name: 'maga',
      key: 4,
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
          <Switch />
          {/*
              hr
          */}
        </View>
        <View style={styles.deviceContainer}>
          <FlatList 
            data={list}
            ListEmptyComponent={()=><Text style={{fontSize: 14}}>Nenhum dispositivo encontrado!</Text>}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={styles.renderDevice} onPress={() => NavigateToControlPainel()}>
                  <View style={styles.renderDeviceBase}>
                    <Image source={bluetoothIcon}/>
                  </View>
                  <View style={styles.renderDeviceInfo}>
                    <Text style={
                      {fontSize: 16, color: '#F56D00', fontWeight: '500'}
                    }>{item.name}</Text>
                  </View>
                  <View style={styles.renderDeviceBase}>
                    <Image source={enterIcon}/>
                  </View>
                </TouchableOpacity>
              )
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
    overflow: 'hidden',
  },
  bluetoothHeader: {
    padding: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#35B7BF',
    borderBottomWidth: 1
  },
  deviceContainer: {
    flex: 1,
  },
  flatList: {
    padding: 16,
    flex: 1,
  },
  renderDevice: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#35B7BF',
    borderBottomWidth: 0.5
  },
  renderDeviceBase: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderDeviceInfo: {
    flex: 1,
    marginHorizontal: 8
  }
})

export default BluetoothConnect;