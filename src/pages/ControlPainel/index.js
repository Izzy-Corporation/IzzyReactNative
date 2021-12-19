import React, { useState } from 'react'
import {
  Image,
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

import botImage from '../../assets/BotIzzy.png'
import arrowUp from '../../assets/icons/arrow-up.png'
import arrowLeft from '../../assets/icons/arrow-left.png'
import arrowRight from '../../assets/icons/arrow-right.png'
import arrowDown from '../../assets/icons/arrow-down.png'
import xIcon from '../../assets/icons/x.png'
import sendIcon from '../../assets/icons/check.png'
import LayoutBase from '../Components/LayoutBase';



export default function ControlPainel() {
  const [seq,setSeq] = useState("")
  const UpdateVisor = (string) => {
    setSeq(seq+string)
  }
  const ResetVisor = () => {
    setSeq('')
  }

  return(
    <LayoutBase>
      <View style={styles.divTop}>
        <View style={styles.header}>
          <Image source={botImage} />
        </View>
        <View style={styles.visor}>
          <Text style={{fontSize: 36, color: '#FFF'}} >{seq}</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View style={styles.aroundButtons}>
          <TouchableOpacity style={styles.buttonUp} onPress={() => UpdateVisor('↑')}>
            <Image source={arrowUp}/>
          </TouchableOpacity>
        </View>
        <View style={styles.midButtons}>
          <TouchableOpacity style={styles.buttonLeft} onPress={() => UpdateVisor('←')}>
            <Image source={arrowLeft}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight} onPress={() => UpdateVisor('→')}>
            <Image source={arrowRight}/>
          </TouchableOpacity>
        </View>
        <View style={styles.aroundButtons}>
          <TouchableOpacity style={styles.buttonDown} onPress={() => UpdateVisor('↓')}>
            <Image source={arrowDown}/>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.buttonBackSpace} onPress={() => ResetVisor()}>
            <Image source={xIcon}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSend}>
            <Image source={sendIcon}/>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutBase>
  )
}

const styles = StyleSheet.create({
  divTop:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  header: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  visor: {
    justifyContent: 'center',
    backgroundColor:'#181820',
    height:100,
    width: '100%',
    borderRadius: 20,
    paddingHorizontal: 12
  },
  aroundButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midButtons: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottom: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonUp: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#27FF7E",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLeft: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#FF27B6",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRight: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#E1FF27",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDown: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#27FFF2",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSend: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#6CFF27",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBackSpace: {
    width: 78,
    height: 78,
    borderRadius: 20,
    backgroundColor: "#FF2741",
    justifyContent: 'center',
    alignItems: 'center',
  },
})
