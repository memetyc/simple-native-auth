import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({children,onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'white',
        width:100,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:'auto',
        backgroundColor:'pink'
    },
    text:{
        textAlign:'center',
        fontSize:17,
        fontWeight:'bold',
        color:'white'
    }
})