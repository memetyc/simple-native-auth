import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


export default function ButtonWhite({children,onPress}) {

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{

    },
    text:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    }
})