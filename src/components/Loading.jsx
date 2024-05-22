import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import React from 'react'

export default function Loading({message}) {
  return (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={'hotpink'} />
      <Text style={styles.text}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:25,
        marginBottom:30,
        color:'hotpink'
    }
})